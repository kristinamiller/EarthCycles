import Ecosystem from './ecosystem';

class Raindrop {
  constructor(options = {}) {
    this.color = "rgba(42, 75, 180, 0.5)";
    this.radius = 10;
    this.pos = this.generatePosition();
    this.vel = this.generateVelocity();
    this.ctx = options.ctx;
    this.fall = this.fall.bind(this);
  }

  getRandomNum(min, max) {
    Math.floor((Math.random() * (max - min) + min))
  }

  generatePosition() {
    let xPos = Math.floor((Math.random() * (window.innerWidth)))
    return [xPos, 0];
  }

  generateVelocity() {
    let velocities = [4,5,6];
    let vel = velocities[Math.floor(Math.random()*velocities.length)]
    return vel;
  }

  generateColor() {
    let transparency = Math.random() * (0.9 - 0.5) + 0.5
    return "rgba(42, 75, 180, transparency)"
  }

  generateRadius() {
    let radius = this.getRandomNum(5, 10);
    return radius;
  }
  

  draw() {
    this.ctx.beginPath();
    // this.ctx.moveTo(this.pos)
    // this.ctx.lineTo([this.pos[0], (this.pos[1]+ 5)]);
    // this.ctx.strokeStyle() = this.color;
    // this.ctx.lineWidth = 1;
    // this.ctx.stroke();
    this.ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI, false);
    this.ctx.fillStyle = this.color;
    this.ctx.fill();
  }

  fall() {
    // if (this.pos[1] > window.innerHeight) {
    //   this.pos = this.generatePosition();
    // }
    this.pos[1] += this.vel;
  }






}

export default Raindrop;