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
    return this.getRandomNum(10, 20);
  }

  generateColor() {
    let colors = [
      "rgba(207, 204, 247, 0.86)", 
      "rgba(207, 204, 247, 0.96)", 
      "rgba(162, 156, 235, 0.66)"
      ];
    let color = colors[Math.floor(Math.random() * colors.length)]
    return color;
  }

  generateRadius() {
    let radius = this.getRandomNum(5, 10);
    return radius;
  }
  

  draw() {
    let length = this.raindropLength;
    // console.log(length)
    this.ctx.beginPath();
    this.ctx.moveTo(this.pos[0], this.pos[1])
    this.ctx.lineTo(this.pos[0], (this.pos[1] + 10));
    this.ctx.strokeStyle = this.color;
    this.ctx.lineWidth = 1;
    this.ctx.stroke();
    this.ctx.fillStyle = this.color;
    this.ctx.fill();
  }

  fall() {

    // let stoppingPoint = this.getRandomNum(window.innerHeight * 0.71, window.innerHeight * 0.51)
    //   if (this.count < 10) {
    //     console.log(stoppingPoint);
    //     this.count += 1
    //   }
    if (this.pos[1] > window.innerHeight * 0.7) {
      this.ecosystem.removeRaindrop(this);
    }
  
    this.pos[1] += this.vel;
    this.vel = this.vel + 0.3;

    // this.pos[1] += 1;
  }






}

export default Raindrop;