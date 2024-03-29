import Raindrop from './raindrop';
import Evaporation from './evaporation';
import Sun from './sun';
import Cloud from './cloud';
import Tree from './tree';
import Mushroom from './mushroom';
import Factory from './factory';
import Fish from './fish';
import Cow from './cow';
import Carbon from './carbon';
import Bubble from './bubble';

class Ecosystem {
  constructor(ctx, canvasEl) {
    this.canvas = canvasEl;
    this.ctx = ctx;
    this.screenDimensions = [];
    this.backgroundTop = 0;
    this.backgroundHeight = 500;
    this.backgroundWidth = 500;
    this.raindrops = [];
    this.raining = false;
    this.evaporations = [];
    this.evaporating = false;
    this.sun = new Sun(ctx);
    this.tree = new Tree(ctx);
    this.photosynthesis = false;
    this.mushroom = new Mushroom(ctx);
    this.factory = new Factory(ctx);
    this.factorySmoking = false;
    this.fish = new Fish(ctx);
    this.cow = new Cow(ctx);
    this.cowFarting = false;
    this.clouds = [];
    this.cloud = new Cloud(ctx);
    this.count = 0;
    this.ratio = 0.8;
    this.carbonBubbles = [];
    this.carbonMoving = false;
    this.carbonLocation = "ground";
    this.carbonFunnel = "factory";
    this.carbonDestination = "sky";
    this.userHasClicked = false;
    this.elements = [
      this.sun,
      this.tree,
      this.mushroom,
      this.factory, 
      this.cow,
      this.fish
    ];

    this.makeRain = this.makeRain.bind(this)
    this.cycle;
  }



  update() {
 
   
  }


  draw() {
    this.ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    
    let context = this.ctx;
    let baseImage = new Image();
    baseImage.src = '../assets/images/ecosystem-background.png';
    this.ratio = window.innerWidth / baseImage.width;
    this.backgroundWidth = baseImage.width * this.ratio;
    this.backgroundHeight = baseImage.height * this.ratio;
    this.backgroundTop = window.innerHeight - this.backgroundHeight;
    context.drawImage(baseImage, 0, this.backgroundTop, this.backgroundWidth, this.backgroundHeight);
    
  
    // this.ctx.font = '38px sans-serif';
    // this.ctx.fillStyle = "white";
    // this.ctx.fillText('Evaporation', positions[0][0] + 20, positions[0][1] + 30);

  }

  drawWaterCycle() {
    this.cycle = "water";
    this.displayText();
    this.sun.draw(this.backgroundHeight, this.backgroundTop, this);
    this.makeSunListener();
    this.mushroom.draw(this.backgroundHeight, this.backgroundTop);
    this.cow.draw(this.backgroundHeight, this.backgroundTop);
    this.addClouds(3);
    this.clouds.forEach((cloud) => {
      cloud.draw();
      cloud.animate();
    })
    this.tree.draw(this.backgroundHeight, this.backgroundTop, this);

    this.fish.draw(this.backgroundHeight, this.backgroundTop);
    this.fish.animate();

    this.raindrops.forEach((raindrop) => {
      raindrop.draw();
      raindrop.fall();
    })

    //this was my attempt to make the evaporation move when the screen moves. 
    let posY = (this.backgroundHeight * 0.78) + this.backgroundTop;
    let positions = [
      [window.innerWidth * 0.7, posY],
      [window.innerWidth * 0.75, posY],
      [window.innerWidth * 0.8, posY],
      [window.innerWidth * 0.85, posY],
      [window.innerWidth * 0.9, posY]
    ]

    for (let i = 0; i < this.evaporations.length; i++) {
      this.evaporations[i].draw(positions[i]);
      this.evaporations[i].evaporate();
    }
    if (this.raining) {
      this.makeRain();
      this.stopRainListener();
    } else {
      this.makeRainListener();
    }

    if (this.evaporating) {
      this.makeEvaporation();
      this.stopEvaporationListener();
    } else {
      this.evaporations = [];
      this.makeEvaporationListener();
    }
    

  }

  drawCarbonCycle() {
    this.cycle = "carbon";
    if (!this.userHasClicked) {
      this.displayText("start-carbon");
    }
    
    this.sun.draw(this.backgroundHeight, this.backgroundTop, this);
    this.mushroom.draw(this.backgroundHeight, this.backgroundTop);
    this.tree.draw(this.backgroundHeight, this.backgroundTop, this);
    this.fish.draw(this.backgroundHeight, this.backgroundTop);
    this.fish.animate();
    this.cow.draw(this.backgroundHeight, this.backgroundTop);
    this.makeCowListener();
    this.factory.draw(this.backgroundHeight, this.backgroundTop);

    if (this.photosynthesis) {
      this.tree.animate();
      this.sun.animate();
    } else {
      this.makeSunListener();
    }

    if (this.factorySmoking) {
      this.factory.makeSmoke();
      this.stopFactoryListener();
    } else {
      this.factory.bubbles = [];
      this.factory.bubbleEmerging = false;
      this.makeFactoryListener();
      this.removeText("smoke");
    }

    if (this.cowFarting) {
      this.cow.makeFart();
      this.displayText("cow");
      if (this.cow.bubbles.length == 0) {
        this.cowFarting = false;
        this.cow.bubbleEmerging = false;
        this.cow.bubbleCount = 0;
      }
    } 

    

    this.createCarbonBubbles();
    this.animateCarbonBubbles();
  }

  displayText(element) {
    let removable = document.querySelector(".description")
    if (removable) {
      removable.classList.add('hidden');
      removable.classList.remove('description');
      this.userHasClicked = true;
    }
    if (element) {
      let id = element;
      let text = document.getElementById(id);
      text.classList.add('description');
      text.classList.remove('hidden');
    }
    
  }

  removeText(element) {
    let id = element;
    let text = document.getElementById(id);
    text.classList.add('hidden');
    text.classList.remove('description');
  }

  createCarbonBubbles() {
    let endRatios = [0.16, 0.12, 0.14, 0.17, 0.23]
    let endRatio = endRatios[Math.floor(Math.random() * endRatios.length)]

    let endPositions = [100, 170, 110, 200, 90, 160];

    let velocities = [
      [0, 0.8],
      [-0.2, 1],
      [0.2, 1.2],
      [0.3, 0.8],
      [-0.3, 0.9]
    ]
    let vel = velocities[Math.floor(Math.random() * velocities.length)]

    let speeds = [0.5, 1, 1.5, 2, 2.5]
    let speed = speeds[Math.floor(Math.random() * speeds.length)]

    for (let i = 0; this.carbonBubbles.length < 6; i++) {
      let carbonBubble = new Bubble({
        color: [255, 0, 191],
        colorChange: 0.008,
        // defaultColor: "rgb(250, 88, 210)",
        defaultColor: "rgb(255, 0, 191)",
        minRadius: 20,
        maxRadius: 25,
        // pos: [0, 0],
        endPosY: endPositions[i],
        vel: [0,1],
        speed: speed,
        ctx: this.ctx,
        increment: 0.3,
        boundary: 10,
        text: 'C',
        type: "carbon",
        ecosystem: this,
        bubbleID: i
      })
      this.carbonBubbles.push(carbonBubble);
    }

  }

  animateCarbonBubbles() {
    for (let i = 0; i < this.carbonBubbles.length; i++) {
      if (this.carbonMoving) {
        // console.log("carbon moving")
        this.carbonBubbles[i].drawCarbon(this.carbonLocation);
        this.carbonBubbles[i].animateCarbon(this.carbonFunnel, this.carbonDestination);
        if (i === 5 && this.carbonBubbles[5].vel[0] === 0 && this.carbonBubbles[5].vel[1] === 0) {
          this.carbonMoving = false;
          this.carbonLocation = this.carbonDestination;
          this.photosynthesis = false;
        }
      } else {
        // console.log("carbon not moving")
        this.carbonBubbles[i].drawCarbon(this.carbonLocation);
        this.carbonBubbles[i].jiggle();
      }
      this.makeCarbonListener(this.carbonBubbles[i].pos)
    }
    // console.log(this.factorySmoking)
  }

  makeCarbonListener(pos) {
    let that = this;
    let coordinates = [
      pos[0] - 20,
      pos[1] - 20,
      pos[0] + 20,
      pos[1] + 20
    ]
    document.addEventListener('click', function (event) {
      let x = event.pageX;
      let y = event.pageY;
      if (x > coordinates[0] && x < coordinates[2] && y > coordinates[1] && y < coordinates[3]) {
        that.carbonMoving = true;
        if (that.carbonLocation === "sky") {
          that.carbonFunnel = "tree";
          that.carbonDestination = "ground";
          that.photosynthesis = true;
          that.displayText("tree");
          that.sun.count = 0;
        }
        if (that.carbonLocation === "ground") {
          that.carbonFunnel = "factory";
          that.carbonDestination = "sky";
          that.factorySmoking = true;
          that.displayText("smoke");
        }

      }
    })
  }

  makeSunListener() {
    let that = this;

    document.addEventListener('click', function (event) {
      let coordinates = [
        that.sun.pos[0] + that.sun.width * 0.1,
        that.sun.pos[1] + that.sun.height * 0.1,
        that.sun.pos[0] + that.sun.width * 0.8,
        that.sun.pos[1] + that.sun.height * 0.8];
        let x = event.pageX;
        let y = event.pageY;
      if (x > coordinates[0] && x < coordinates[2] && y > coordinates[1] && y < coordinates[3]) {
        if (that.cycle === "carbon") {
          that.photosynthesis = true;
          that.displayText("tree");
          that.sun.count = 0;
          if (that.carbonLocation === "sky") {
            that.carbonFunnel = "tree";
            that.carbonDestination = "ground";
            that.carbonMoving = true;
          }
        } else {
          if (that.evaporating === false) {
            that.evaporating = true;
          } else {
            that.evaporating = false;
          }
        }

        
      }
    })
  }

  

  // cow

  makeCowListener() {
    let that = this;
    let coordinates;
    if (this.cow.rect) {
      coordinates = this.cow.rect;
    }
    document.addEventListener('click', function (event) {
      let x = event.pageX;
      let y = event.pageY;
      if (x > coordinates[0] && x < coordinates[2] && y > coordinates[1] && y < coordinates[3]) {
        that.cowFarting = true;
      }
    })
  }

  

  // factory

  makeFactoryListener() {
    let that = this;
    document.addEventListener('click', function (event) {
      let coordinates =[
        that.factory.pos[0],
        that.factory.pos[1],
        that.factory.pos[0] + that.factory.width,
        that.factory.pos[1] + that.factory.height
      ];
      let x = event.pageX;
      let y = event.pageY;
      if (x > coordinates[0] && x < coordinates[2] && y > coordinates[1] && y < coordinates[3]) {
        if (that.factorySmoking === false) {
          that.factorySmoking = true;
          that.displayText("smoke");
          if (that.carbonLocation === "ground") {
            that.carbonFunnel = "factory";
            that.carbonDestination = "sky";
            that.carbonMoving = true;
          }
        }
      }
    })
  }

  stopFactoryListener() {
    let that = this;
    document.addEventListener('click', function (event) {
      let coordinates = [
        that.factory.pos[0],
        that.factory.pos[1],
        that.factory.pos[0] + that.factory.width,
        that.factory.pos[1] + that.factory.height
      ];
      let x = event.pageX;
      let y = event.pageY;
      if (x > coordinates[0] && x < coordinates[2] && y > coordinates[1] && y < coordinates[3]) {
        that.factorySmoking = false;
      }
    })
  }




   //evaporation

  makeEvaporation() {
    let posY = (this.backgroundHeight * 0.78) + this.backgroundTop;
    let positions = [
      [window.innerWidth * 0.7, posY],
      [window.innerWidth * 0.75, posY],
      [window.innerWidth * 0.8, posY],
      [window.innerWidth * 0.85, posY],
      [window.innerWidth * 0.9, posY]
    ]

    if (this.evaporations.length < 5) {
      for (let i = 0; i < 5; i++) {
        let squiggle = new Evaporation(this.ctx, positions[i]);
        this.evaporations.push(squiggle);
      }
    }
  }

  makeEvaporationListener() {
    let rectStart = [window.innerWidth * 0.5,
      (this.backgroundHeight * 0.74) + this.backgroundTop]
    let rectEnd = [
      rectStart[0] + (window.innerWidth * 0.5),
      rectStart[1] + this.backgroundHeight * 0.1
    ]
    let that = this;
    document.addEventListener('click', function (event) {
      let x = event.pageX;
      let y = event.pageY;
      if (x > rectStart[0] && x < rectEnd[0] && y > rectStart[1] && y < rectEnd[1]) {
        that.evaporating = true;
      }
    })
  }

  stopEvaporationListener() {
    let rectStart = [window.innerWidth * 0.5,
    (this.backgroundHeight * 0.74) + this.backgroundTop]
    let rectEnd = [
      rectStart[0] + (window.innerWidth * 0.5),
      rectStart[1] + this.backgroundHeight * 0.1
    ]
    let that = this;
    document.addEventListener('click', function (event) {
      let x = event.pageX;
      let y = event.pageY;
      if (x > rectStart[0] && x < rectEnd[0] && y > rectStart[1] && y < rectEnd[1]) {
        that.evaporating = false;
      }
    })
  }
  
  //rain ***********

  makeRainListener() {
    let clouds = this.clouds;
    let that = this;
    document.addEventListener('click', function (event) {
      let x = event.pageX;
      let y = event.pageY;
      clouds.forEach((cloud) => {
        let coordinates = cloud.rect;
        if (x > coordinates[0] && x < coordinates[2] && y > coordinates[1] && y < coordinates[3]) {
          that.raining = true;
        }
      })
    })
  }

  stopRainListener() {
    let clouds = this.clouds;
    let that = this;
    document.addEventListener('click', function (event) {
      let x = event.pageX;
      let y = event.pageY;
      clouds.forEach((cloud) => {
        let coordinates = cloud.rect;
        if (x > coordinates[0] && x < coordinates[2] && y > coordinates[1] && y < coordinates[3]) {
          that.raining = false;
        }
      })
    })
  }

  addRaindrops() {
    let numRaindrops = window.innerWidth * 0.08;
      for (let i = 0; i < numRaindrops; i++) {
        let newRaindrop = new Raindrop({ 
          ctx: this.ctx, 
          ecosystem: this, 
          backgroundHeight: this.backgroundHeight, backgroundTop: this.backgroundTop })
        this.raindrops.push(newRaindrop);
      }
  }

  makeRain() {
    this.addRaindrops();
  }

  removeRaindrop(raindrop) {
    this.raindrops.splice(this.raindrops.indexOf(raindrop),1);
  };

//clouds
  addClouds(numClouds) {
    if (this.clouds.length < numClouds) {
      let positions = [
        [window.innerWidth * 0.25, window.innerHeight * 0.1],
        [window.innerWidth * 0.55, window.innerHeight * 0.2],
        [(window.innerWidth * 0.55) + 40, window.innerHeight * 0.2],
        [window.innerWidth * 0.9, window.innerHeight * 0.15],
        [window.innerWidth * 0.73, window.innerHeight * 0.22],
      ]

      for (let i = 0; i < numClouds; i++) {
        let newCloud = new Cloud(this.ctx, positions[i])
        this.clouds.push(newCloud);
        this.elements.push(newCloud);
      }
    } 

  }


  
  makeBase() {
    let context = this.ctx;
    let baseImage = new Image();
    baseImage.src = '../assets/images/ecosystem-background.png';
    baseImage.onload = function () {
      context.drawImage(baseImage, -100, -100);
    }
  }

  getRandomNum(min, max) {
    Math.floor((Math.random() * (max - min) + min))
  }

}

export default Ecosystem;