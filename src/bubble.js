import Ecosystem from './ecosystem';

class Bubble {
  constructor(options = {}) {
    this.color = options.color;
    this.radius = options.radius;
    this.pos = options.pos.slice();
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
    this.ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI, false);
    this.ctx.fillStyle = this.color;
    this.ctx.fill();
  }

  animate() {
    if (this.radius > 20) {
      this.increment = 0;
    }
    this.radius += this.increment;
    this.pos[0] -= this.vel[0];
    this.pos[1] -= 1;
  }
  

}

export default Bubble;