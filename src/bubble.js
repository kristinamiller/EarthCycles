import Ecosystem from './ecosystem';
import Factory from './factory';

class Bubble {
  constructor(options = {}) {
    this.color = options.color;
    if (this.color) {
      this.finalColor = `rgba(
      ${this.color[0]},
      ${this.color[1]},
      ${this.color[2]},
      ${this.transparency}
      )`
    }
    this.defaultColor = options.defaultColor;
    this.colorChange = options.colorChange;
    this.transparency = 1;
    this.minRadius = options.minRadius;
    this.maxRadius = options.maxRadius;
    this.pos = options.pos.slice();
    this.startPos = options.pos.slice();
    this.vel = options.vel;
    this.ctx = options.ctx;
    this.increment = options.increment;
    this.boundary = options.boundary;
    this.animate = this.animate.bind(this);
    this.text = options.text;
    this.endPosY = options.endPosY;
    this.type = options.type;
    this.ecosystem = options.ecosystem;
    this.border = 10;
    // this.ecosystem = options.ecosystem;
    // this.backgroundHeight = options.backgroundHeight;
    // this.backgroundTop = options.backgroundTop;
  }



  draw() {
    this.ctx.beginPath();
    this.ctx.arc(this.pos[0], this.pos[1], this.minRadius, 0, 2 * Math.PI, false);
    this.ctx.fillStyle = this.defaultColor;
    this.ctx.fillStyle = `${this.finalColor}`;
    this.ctx.fill();

    if (this.text) {
      this.ctx.font = '26px sans-serif';
      this.ctx.fillStyle = "white";
      this.ctx.fillText(this.text, this.pos[0] - 10, this.pos[1] + 10)
      
    }

  }

  animate() {
      if (this.minRadius > this.maxRadius) {
        this.increment = 0;
      }
      if (this.pos[0] < this.startPos[0] - this.boundary || this.pos[0] > this.startPos[0] + this.boundary) {
        this.vel[0] = 0;
      }

      this.minRadius += this.increment;
      this.pos[0] -= this.vel[0];
      this.pos[1] -= this.vel[1];
      // this.pos[1] -= 1;

      this.transparency -= this.colorChange;
      this.finalColor = `rgba(
    ${this.color[0]},
    ${this.color[1]},
    ${this.color[2]},
    ${this.transparency}
    )`
    

  }

  
  animateCarbon() {
      if (this.pos[0] < this.startPos[0] - this.boundary || this.pos[0] > this.startPos[0] + this.boundary) {
        this.vel[0] = -0.3;
      }
      if (this.pos[1] < this.endPosY) {
        this.vel = [-1, 0];
      }
      if (this.pos[0] > (window.innerWidth * 0.7)) {
        this.vel = [0, 0];
        this.ecosystem.carbonMoving = false;
      }
      this.pos[0] -= this.vel[0];
      this.pos[1] -= this.vel[1];
    
  }

  pulse() {
    if (this.minRadius < this.maxRadius - 5) {
      this.increment = 0.05;
    } 
    if (this.minRadius > this.maxRadius) {
      this.increment = -0.05;
    }
    this.minRadius += this.increment;
  }

  jiggle() {
    // // this.vel[0] = -0.5;
    // if (this.pos[0] < this.startPos[0] - 10)  {
    //   this.vel[0] = -this.vel[0];
    // }
    // if (this.pos[0] < this.startPos[0] + 10)  {
    //   this.vel[0] = -this.vel[0];
    // }
    // this.pos[0] += this.vel[0];

    if (this.transparency < 0.6) {
      this.increment = -this.increment;
      // this.finalColor = "rgba(255, 0, 191, 0.548)";
      this.colorChange = -this.colorChange
    } 
    
    if (this.transparency > 1) {
      this.increment = -this.increment;
      // this.finalColor = "rgb(250, 88, 210)";
      this.colorChange = -this.colorChange
    }
    this.border += this.increment;
    // console.log(this.border)

    this.transparency -= this.colorChange;
    this.finalColor = `rgba(
    ${this.color[0]},
    ${this.color[1]},
    ${this.color[2]},
    ${this.transparency}
    )`

    
  }

}



export default Bubble;