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
    this.increment = 0.2;
    this.vel = [0, 0.5];
    this.smokePos = [];
    this.bubbleEmerging = false;
    this.bubbles = [];
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
  }

  makeSmoke() {
    
    if (this.smokePos.length === 0) {
      this.smokePos = [this.pos[0] + (this.width * 0.61), this.pos[1] + (this.height * 0.25)];
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
      if (this.bubbles[i].pos[1] < startPos[1] - 50) {
        this.bubbleEmerging = false;
      } 
    }
    this.bubbles.forEach((bubble) => {
      if (bubble.pos[1] > startPos[1] - 50) {
        this.bubbleEmerging = true;
      }
    })


    console.log(this.bubbles.length)
  }

  addBubble() {
    if (!this.bubbleEmerging && this.bubbles.length < 10) {
      let bubble = new Bubble({
        color: this.color,
        radius: this.smokeRadius,
        pos: this.smokePos,
        vel: this.vel,
        ctx: this.ctx,
        increment: this.increment
      })
      this.bubbles.push(bubble);
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