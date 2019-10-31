import Ecosystem from './ecosystem';

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