import Bubble from './bubble';

class Factory {
  constructor(ctx) {
    this.image = new Image();
    this.image.src = '../assets/images/factory2.png';
    this.ctx = ctx;
    this.ratio = window.innerWidth * 0.00005;
    this.width = this.image.width * this.ratio;
    this.height = this.image.height * this.ratio;
    this.pos = [0,0];
    this.defaultColor = "rgb(50, 51, 61)";
    this.color = [50, 51, 61];
    this.colorChange = 0;
    this.smokeRadius = 15;
    this.width = 100;
    this.height = 100;
    this.increment = 0.4;
    this.vel = [0, 1];
    this.smokePos = [];
    this.bubbleEmerging = false;
    this.bubbles = [];
    this.boundary = 20;

    if (this.pos) {
      this.rect = [this.pos[0], this.pos[1], this.pos[0] + this.width, this.pos[1] + this.height]
    }
  }



  draw(backgroundHeight, backgroundTop) {

    let ratio = window.innerWidth * 0.0005;
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
    // this.displayText();
    
    if (this.smokePos.length === 0) {
      this.smokePos = [this.pos[0] + (this.width * 0.6), this.pos[1] + (this.height * 0.25)];
    }

    let startPos = this.smokePos.slice();

    if (!this.bubbleEmerging) {
      this.addBubble();
    }
    for (let i = 0; i < this.bubbles.length; i++) {
      this.bubbles[i].draw();
      this.bubbles[i].animate(); 
      if (this.bubbles[i].pos[1] < startPos[1] - 3) {
        this.bubbleEmerging = false;
      } 
      if (this.bubbles[i].pos[1] < -40) {
        this.bubbles.splice(i, 1);
      }
    }
    this.bubbles.forEach((bubble) => {
      if (bubble.pos[1] > startPos[1] - 3) {
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
      [this.smokePos[0] + this.width * 0.08, this.smokePos[1] + this.height * 0.06]
    ]
    let startPos = startPositions[Math.floor(Math.random() * startPositions.length)]

    if (!this.bubbleEmerging && this.bubbles.length < 50) {
      let bubble1 = new Bubble({
        color: this.color,
        colorChange: this.colorChange,
        defaultColor: this.defaultColor,
        minRadius: 8,
        maxRadius: maxRadius,
        pos: startPositions[0],
        vel: vel,
        ctx: this.ctx,
        increment: this.increment,
        boundary: this.boundary
      })
      this.bubbles.push(bubble1);
      let bubble2 = new Bubble({
        color: this.color,
        colorChange: this.colorChange,
        defaultColor: this.defaultColor,
        minRadius: 5,
        maxRadius: maxRadius,
        pos: startPositions[1],
        vel: vel,
        ctx: this.ctx,
        increment: this.increment,
        boundary: this.boundary
      })
      this.bubbles.push(bubble2);
    }
  }

  displayText() {
    // console.log("display text!!")
    let text = document.getElementById("smoke-description");
    text.classList.remove('hidden');
    text.classList.add('smoke');
  }

}

export default Factory;