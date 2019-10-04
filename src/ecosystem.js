import Raindrop from './raindrop';
import Evaporation from './evaporation';
import Sun from './sun';
import Cloud from './cloud';

class Ecosystem {
  constructor(ctx) {
    this.ctx = ctx;
    this.rain = false;
    this.raindrops = [];
    this.evaporation = [];
    this.sun = new Sun(ctx);
    this.clouds = [];
    this.cloud = new Cloud(ctx);
    this.count = 0;
    this.ratio = 0.8;
  }

  update() {
    // this.makeRain();
    this.makeEvaporation();
    // this.cloud.animate();
    //checks if its raining or not. if it's true, make rain.
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

    this.addClouds(5);
    this.clouds.forEach((cloud) => {
      cloud.draw();
    })
    
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
    let double = [(window.innerWidth * 0.25) + 100, window.innerHeight * 0.17]
    let positions = [
      [window.innerWidth * 0.25, window.innerHeight * 0.1],
      [window.innerWidth * 0.45, window.innerHeight * 0.2],
      [(window.innerWidth * 0.45) + 40, window.innerHeight * 0.2],
      [window.innerWidth * 0.9, window.innerHeight * 0.15],
      // [window.innerWidth * 0.28, window.innerHeight * 0.17],
      // [window.innerWidth * 0.23, window.innerHeight * 0.15],
      // [window.innerWidth * 0.23, window.innerHeight * 0.15],
      [window.innerWidth * 0.73, window.innerHeight * 0.22],
    ]

    for (let i = 0; i < numClouds; i++) {
      let newCloud = new Cloud(this.ctx, positions[i])
      this.clouds.push(newCloud);
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