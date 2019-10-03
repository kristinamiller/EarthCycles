import Ecosystem from './ecosystem';

class Raindrop {
  constructor(options = {}) {
    this.color = this.generateColor();
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
    let xPos = Math.floor((Math.random() * (window.innerWidth)));
    return [xPos, 0];
  }

  generateVelocity() {
    let velocities = [2, 2.5, 3];
    let vel = velocities[Math.floor(Math.random()*velocities.length)]
    return vel;
  }

  generateColor() {
    let colors = ["rgba(42, 75, 180, 0.692)", "rgba(42, 75, 180, 0.992)", "rgba(42, 81, 180, 0.767)", "rgba(42, 61, 180, 0.367)"];
    let color = colors[Math.floor(Math.random() * colors.length)]
    return color;
  }

  generateRadius() {
    let radius = this.getRandomNum(5, 10);
    return radius;
  }
  

  draw() {
    this.ctx.beginPath();
    // this.ctx.fillStyle = this.color;
    // this.ctx.fillRect(this.pos[0], this.pos[1], 0.5, 5);
    this.ctx.moveTo(this.pos[0], this.pos[1])
    this.ctx.lineTo(this.pos[0], (this.pos[1]+ 10));
    this.ctx.strokeStyle = this.color;
    this.ctx.lineWidth = 1;
    this.ctx.stroke();
    // this.ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI, false);
    this.ctx.fillStyle = this.color;
    this.ctx.fill();
  }

  fall() {
    if (this.pos[1] > window.innerHeight) {
      this.pos = this.generatePosition();
    }
    this.vel = this.generateVelocity();
    this.pos[1] += this.vel;
    this.vel = this.vel + 0.3;

    // this.pos[1] += 1;
  }






}

export default Raindrop;