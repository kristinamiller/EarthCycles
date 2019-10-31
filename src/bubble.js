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
    this.text = options.text;
    this.endPos = options.endPos;
    
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
      this.ctx.font = '16px sans-serif';
      this.ctx.fillStyle = "white";
      this.ctx.fillText(this.text, this.pos[0] - 16, this.pos[1] + 5)
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
  
  jiggle() {
    // console.log("jiggle");
    this.pos = [100, 100];
    this.increment = 1;
    this.pos[0] += this.increment;
    
  }

}



export default Bubble;