import Raindrop from './raindrop';
import Evaporation from './evaporation';
import Sun from './sun';

class Ecosystem {
  constructor(ctx) {
    this.ctx = ctx;
    this.rain = false;
    this.raindrops = [];
    this.evaporation = new Evaporation({ctx: this.ctx});
    this.sun = new Sun(ctx);
    this.count = 0;
  }

  update() {
    this.makeRain();
    // this.evaporation.evaporate();
    // this.makeBase();
    //checks if its raining or not. if it's true, make rain.
  }

  addRaindrops() {
    // if (this.raindrops.length < 100) {
      // console.log(this.raindrops.length)
      for (let i = 0; i < 50; i++) {
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

  draw() {
    this.ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    
    let context = this.ctx;
    let baseImage = new Image();
    baseImage.src = '../assets/images/gradient-lake-background.png';
    let ratio = window.innerWidth / baseImage.width;
    let height = baseImage.height * ratio;
    let width = baseImage.width * ratio;

    context.drawImage(baseImage, 0, window.innerHeight - height, width, height);

    this.sun.draw();
    
    this.raindrops.forEach((raindrop) => {
      raindrop.draw();
      raindrop.fall();
    })


    // this.evaporation.draw();

  }

  
  makeBase() {
    let context = this.ctx;
    let baseImage = new Image();
    baseImage.src = '../assets/images/gradient-lake-background.png';
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