import Raindrop from './raindrop';
import Evaporation from './evaporation';

class Ecosystem {
  constructor(ctx, ecosystem) {
    this.ctx = ctx;
    this.ecosystem = ecosystem;
    this.rain = false;
    this.raindrops = [];
    this.evaporation = new Evaporation({ctx: this.ctx});
  }

  update() {
    // this.makeRain();

    //checks if its raining or not. if it's true, make rain.
  }

  addRaindrops() {
    if (this.raindrops.length < 3000) {
      for (let i = 0; i < 50; i++) {
        let newRaindrop = new Raindrop({ ctx: this.ctx })
        this.raindrops.push(newRaindrop);
      }
    }
  }

  makeRain() {
    this.addRaindrops();
  }

  draw() {
    this.ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

    this.raindrops.forEach((raindrop) => {
      raindrop.draw();
      raindrop.fall();
    })

   

    this.evaporation.draw();
    //draw all the things. sun, rain, clouds, etc.

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