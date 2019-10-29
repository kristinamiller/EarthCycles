import Ecosystem from './ecosystem';

class Bubble {
  constructor(options = {}) {
    this.color = options.color;
    this.minRadius = options.minRadius;
    this.maxRadius = options.maxRadius;
    this.pos = options.pos.slice();
    this.startPos = options.pos.slice();
    this.vel = options.vel;
    this.ctx = options.ctx;
    this.increment = options.increment;
    this.animate = this.animate.bind(this);
    
    // this.ecosystem = options.ecosystem;
    // this.backgroundHeight = options.backgroundHeight;
    // this.backgroundTop = options.backgroundTop;
  }



  draw() {
    // console.log(this.radius)
    this.ctx.beginPath();
    this.ctx.arc(this.pos[0], this.pos[1], this.minRadius, 0, 2 * Math.PI, false);
    this.ctx.fillStyle = this.color;
    this.ctx.fill();
  }

  animate() {
    if (this.minRadius > this.maxRadius) {
      this.increment = 0;
    }
    if (this.pos[0] < this.startPos[0] - 20 || this.pos[0] > this.startPos[0] + 20) {
      this.vel[0] = 0;
    }

    this.minRadius += this.increment;
    this.pos[0] -= this.vel[0];
    this.pos[1] -= this.vel[1];



  }
  

}

export default Bubble;