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
    this.raindropLength = this.generateLength();
    this.count = 0;
  }

  getRandomNum(min, max) {
    Math.floor((Math.random() * (max - min) + min))
  }

  generatePosition() {
    let xPos = Math.floor((Math.random() * (window.innerWidth)));
    let yPositions = [-10, -20, -30, -40, -50, -60, -70, -80, -90, -100 ];
    let yPos = yPositions[Math.floor(Math.random() * yPositions.length)]
    return [xPos, yPos]
  }

  generateVelocity() {
    let velocities = [4, 5, 6];
    let vel = velocities[Math.floor(Math.random()*velocities.length)]
    return vel;
  }

  generateLength() {
    return this.getRandomNum(10, 20);
  }

  generateColor() {
    let colors = [
      "rgba(207, 204, 247, 0.86)", 
      "rgba(207, 204, 247, 0.96)", 
      "rgba(192, 176, 235, 0.66)"
      ];
    let color = colors[Math.floor(Math.random() * colors.length)]
    return color;
  }

  generateRadius() {
    let radius = this.getRandomNum(5, 10);
    return radius;
  }
  

  draw() {
    let lengths = [10, 13, 17];
    let length = lengths[Math.floor(Math.random() * lengths.length)]

    this.ctx.beginPath();
    this.ctx.moveTo(this.pos[0], this.pos[1])
    this.ctx.lineTo(this.pos[0] + 2, (this.pos[1] + length));
    this.ctx.strokeStyle = this.color;
    this.ctx.lineWidth = 1;
    this.ctx.stroke();
    this.ctx.fillStyle = this.color;
    this.ctx.fill();
  }

  fall() {
    let ratios = [0.5, 0.6, 0.7, 0.71, 0.71];
    let ratio = ratios[Math.floor(Math.random() * ratios.length)]

    if (this.pos[1] > window.innerHeight * ratio) {
      this.ecosystem.removeRaindrop(this);
    }
  
    this.pos[0] += 0.2;
    this.pos[1] += this.vel;
    this.vel = this.vel + 0.2;

    // this.pos[1] += 1;
  }






}

export default Raindrop;