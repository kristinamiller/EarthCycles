import Bubble from './bubble'

class Factory {
  constructor(ctx) {
    this.image = new Image();
    this.image.src = '../assets/images/factory2.png';
    this.ctx = ctx;
    this.ratio = window.innerWidth * 0.00005;
    this.width = this.image.width * this.ratio;
    this.height = this.image.height * this.ratio;
    this.pos = [0,0];
    this.color = "rgba(50, 51, 61)";
    this.smokeRadius = 15;
    this.width = 100;
    this.height = 100;
    this.increment = 0.4;
    this.vel = [0, 1];
    this.smokePos = [];
    this.bubbleEmerging = false;
    this.bubbles = [];

    if (this.pos) {
      this.rect = [this.pos[0], this.pos[1], this.pos[0] + this.width, this.pos[1] + this.height]
    }
  }



  draw(backgroundHeight, backgroundTop) {

    let ratio = window.innerWidth * 0.00045;
    this.height = this.image.height * ratio;
    this.width = this.image.width * ratio;
    let bottom = (backgroundHeight * 0.75) + backgroundTop;
    let topX = window.innerWidth * 0.02;
    let topY = bottom - this.height;

    this.ctx.drawImage(this.image, topX, topY, this.width, this.height);
    this.pos = [topX, topY];

    // this.ctx.fillRect(this.pos[0], this.pos[1], this.width, this.height)

  }

  makeSmoke() {

    // console.log("make smoke")
    
    if (this.smokePos.length === 0) {
      this.smokePos = [this.pos[0] + (this.width * 0.61), this.pos[1] + (this.height * 0.28)];
    }

    let startPos = this.smokePos.slice();

    if (!this.bubbleEmerging) {
      this.addBubble();
      
      // this.bubbleEmerging = true;
      // if (bubble.pos > this.smokePos + 50) {
      //   this.bubbleEmerging = false;
      // }
    }
    for (let i = 0; i < this.bubbles.length; i++) {
      this.bubbles[i].draw();
      this.bubbles[i].animate(); 
      if (this.bubbles[i].pos[1] < startPos[1] - 10) {
        this.bubbleEmerging = false;
      } 
      if (this.bubbles[i].pos[1] < -40) {
        this.bubbles.splice(i, 1);
      }
    }
    this.bubbles.forEach((bubble) => {
      if (bubble.pos[1] > startPos[1] - 10) {
        this.bubbleEmerging = true;
      } 
     
    })
  }

  addBubble() {
    let velocities = [
      [0,0.8],
      [-0.1, 0.8],
      [0.1, 0.8],
      [0.3,0.8],
      [-0.3,0.8],
      [0.4,0.8],
      [-0.4,0.8],
      [-0.2, 0.8],
      [0.2, 0.8]
    ] 
    let vel = velocities[Math.floor(Math.random() * velocities.length)]
    let minRadii = [10, 5, 8, 12, 14]
    let minRadius = minRadii[Math.floor(Math.random() * minRadii.length)]
    let maxRadii = [22, 25, 28, 30, 32]
    let maxRadius = maxRadii[Math.floor(Math.random() * maxRadii.length)]
    let startPositions = [
      this.smokePos,
      [this.smokePos[0] + 20, this.smokePos[1] + 10]
    ]
    let startPos = startPositions[Math.floor(Math.random() * startPositions.length)]

    if (!this.bubbleEmerging && this.bubbles.length < 40) {
      let bubble1 = new Bubble({
        color: this.color,
        minRadius: 8,
        maxRadius: maxRadius,
        pos: startPositions[0],
        vel: vel,
        ctx: this.ctx,
        increment: this.increment
      })
      this.bubbles.push(bubble1);
      let bubble2 = new Bubble({
        color: this.color,
        minRadius: 5,
        maxRadius: maxRadius,
        pos: startPositions[1],
        vel: vel,
        ctx: this.ctx,
        increment: this.increment
      })
      this.bubbles.push(bubble2);
    }
  }


  makeSmokeBubble() {

    // if (this.smokePos.length === 0) {
    //   this.smokePos = [this.pos[0] + (this.width * 0.61), this.pos[1] + (this.height * 0.25)];
    // }
    // this.ctx.beginPath();
    // this.ctx.arc(this.smokePos[0], this.smokePos[1], this.smokeRadius, 0, 2 * Math.PI, false);
    // this.ctx.fillStyle = this.color;
    // this.ctx.fill();

    console.log('make smoke bubble')


    let bubblePos = [this.pos[0] + (this.width * 0.61), this.pos[1] + (this.height * 0.25)];
    let smokeRadius = this.smokeRadius;
    this.ctx.beginPath();
    this.ctx.arc(bubblePos[0], bubblePos[1], smokeRadius, 0, 2 * Math.PI, false);
    this.ctx.fillStyle = this.color;
    this.ctx.fill();

    let increment = this.increment;
    if (smokeRadius > 20) {
      increment = 0;
    }
    smokeRadius += increment;
    // bubblePos[0] -= this.vel[0];
    // bubblePos[1] -= this.vel[1];


    // this.animate();
  }

  animate() {

    // if (this.smokeRadius > 20) {
    //   this.increment = 0;
    // }
    // this.smokeRadius += this.increment;
    // this.smokePos[0] -= this.vel[0];
    // this.smokePos[1] -= this.vel[1];
  }

}

export default Factory;