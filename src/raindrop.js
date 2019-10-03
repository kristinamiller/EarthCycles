import Ecosystem from './ecosystem';

class Raindrop {
  constructor(options = {}) {
    this.color = this.generateColor();
    this.radius = 10;
    this.pos = this.generatePosition();
    this.vel = this.generateVelocity();
    this.ctx = options.ctx;
    this.fall = this.fall.bind(this);
    this.ecosystem = options.ecosystem;
    this.length = this.generateLength();
  }

  getRandomNum(min, max) {
    Math.floor((Math.random() * (max - min) + min))
  }

  generatePosition() {
    let xPos = Math.floor((Math.random() * (window.innerWidth)));
    let yPositions = [-1, -5, -2];
    let yPos = yPositions[Math.floor(Math.random() * yPositions.length)]
    return [xPos, yPos];
  }

  generateVelocity() {
    let velocities = [4, 5, 6];
    let vel = velocities[Math.floor(Math.random()*velocities.length)]
    return vel;
  }

  generateLength() {
    let length = this.getRandomNum(10, 20);
    return length;
  }

  generateColor() {
    let colors = [
      "rgba(197, 201, 221, 0.76)", 
      "rgba(197, 201, 221, 0.56)", 
      "rgba(197, 201, 221, 0.96)"
      // "rgba(207, 229, 247, 0.135)", 
      // "rgba(207, 229, 247, 0.335)", 
      // "rgba(207, 229, 247, 0.235)", 
      ];
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
    this.ctx.lineTo(this.pos[0], (this.pos[1] + 10));
    this.ctx.strokeStyle = this.color;
    this.ctx.lineWidth = 1;
    this.ctx.stroke();
    // this.ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI, false);
    this.ctx.fillStyle = this.color;
    this.ctx.fill();
  }

  fall() {
    if (this.pos[1] > window.innerHeight) {
      this.ecosystem.removeRaindrop(this);
    }
  
    this.pos[1] += this.vel;
    this.vel = this.vel + 0.2;

    // this.pos[1] += 1;
  }






}

export default Raindrop;