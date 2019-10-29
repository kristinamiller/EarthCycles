import Raindrop from './raindrop';
import Evaporation from './evaporation';
import Sun from './sun';
import Cloud from './cloud';
import Tree from './tree';
import Mushroom from './mushroom';
import Factory from './factory';
import Fish from './fish';
import Cow from './cow';

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
    this.mushroom = new Mushroom(ctx);
    this.factory = new Factory(ctx);
    this.fish = new Fish(ctx);
    this.cow = new Cow(ctx);
    this.clouds = [];
    this.cloud = new Cloud(ctx);
    this.count = 0;
    this.ratio = 0.8;
    
    
    this.elements = [
      this.sun,
      this.tree,
      this.mushroom,
      this.factory, 
      this.cow,
      this.fish
    ];

    this.makeRain = this.makeRain.bind(this)

  }



  update() {

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

    this.clouds.forEach((cloud) => {
      // cloud.animate();
    })

   
   
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
    // console.log(baseImage.width);
    context.drawImage(baseImage, 0, this.backgroundTop, this.backgroundWidth, this.backgroundHeight);
    this.sun.draw();
    
    this.addClouds(3);
    this.clouds.forEach((cloud) => {
      cloud.draw();
      // cloud.animate();
    })
    this.tree.draw(this.backgroundHeight, this.backgroundTop);
    this.mushroom.draw(this.backgroundHeight, this.backgroundTop);
    this.factory.draw(this.backgroundHeight, this.backgroundTop);
    this.factory.makeSmoke();
    this.fish.draw(this.backgroundHeight, this.backgroundTop);
    this.cow.draw(this.backgroundHeight, this.backgroundTop);
    // this.cow.animate();
    
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

    this.ctx.font = '38px sans-serif';
    this.ctx.fillStyle = "white";
    this.ctx.fillText('Evaporation', positions[0][0] + 20, positions[0][1] + 30);

  }

  // factory
  makeFactorySmoke() {
    // for (let i = 0; i < 4; i++) {
      this.factory.makeSmokeBubble();
    // }
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
      // console.log("test");
      context.drawImage(baseImage, -100, -100);
    }
  }

  //handle click - when someone clicks cloud, updates 
  // look up vanilla dom click event handler
  // look up positioning of clicks on canvas
  //

  getRandomNum(min, max) {
    Math.floor((Math.random() * (max - min) + min))
  }

}

export default Ecosystem;