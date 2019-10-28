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
    this.rain = false;
    this.raindrops = [];
    this.evaporation = [];
    this.sun = new Sun(ctx);
    this.tree = new Tree(ctx);
    this.mushroom = new Mushroom(ctx);
    this.factory = new Factory(ctx);
    this.fish = new Fish(ctx);
    this.cow = new Cow(ctx);
    this.clouds = [];
    this.cloud = new Cloud(ctx);
    this.raining = false;
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

  cloudListener() {
    let clouds = this.clouds;
    let that = this;
    document.addEventListener('click', function (event) {
      let x = event.pageX;
      let y = event.pageY;
      clouds.forEach((cloud) => {
        let coordinates = cloud.rect;
        // console.log(cloud.rect)
        if (!cloud.raining) {
          if (x > coordinates[0] && x < coordinates[2] && y > coordinates[1] && y < coordinates[3]) {
            if (!that.raining) {
              that.raining = true;
              cloud.raining = true;
            }
          }
        }

      })
    })
    console.log(this.raining)
  }



  update() {
 
    if (this.raining) {
      this.makeRain();
    }
    this.makeEvaporation();


    this.clouds.forEach((cloud) => {
      // cloud.draw();
      // cloud.animate();
    })
    // this.cloud.animate();
    //checks if its raining or not. if it's true, make rain.
    this.cloudListener();

  }


  draw() {
    this.ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    
    let context = this.ctx;
    let baseImage = new Image();
    baseImage.src = '../assets/images/ecosystem-background.png';
    this.ratio = window.innerWidth / baseImage.width;
    let height = baseImage.height * this.ratio;
    let width = baseImage.width * this.ratio;

    context.drawImage(baseImage, 0, window.innerHeight - height, width, height);

    this.sun.draw();
    
    this.addClouds(3);
    this.clouds.forEach((cloud) => {
      cloud.draw();
      // cloud.animate();
    })
    this.tree.draw();
    this.mushroom.draw();
    this.factory.draw();
    this.fish.draw();
    this.cow.draw();
    // this.cow.animate();
    
    this.raindrops.forEach((raindrop) => {
      raindrop.draw();
      raindrop.fall();
    })


    this.evaporation.forEach((squiggle) => {
      squiggle.draw();
      squiggle.evaporate();
    })

  }
  
  //rain ***********

  addRaindrops() {
    let numRaindrops = window.innerWidth * 0.08;
      for (let i = 0; i < numRaindrops; i++) {
        let newRaindrop = new Raindrop({ ctx: this.ctx, ecosystem: this })
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

//evaporation

  makeEvaporation() {


    for (let i = 0; i < 3; i++) {
      new Evaporation({ ctx: this.ctx })
      this.evaporation.push()
    }


  }




  
  makeBase() {
    let context = this.ctx;
    let baseImage = new Image();
    baseImage.src = '../assets/images/ecosystem-background.png';
    baseImage.onload = function () {
      console.log("test");
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