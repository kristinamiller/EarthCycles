import Bubble from './bubble';


class Cow {
  constructor(ctx) {
    this.image = new Image();
    this.image.src = '../assets/images/cow-eating-grass.png';
    this.ctx = ctx;
    this.ratio = window.innerWidth * 0.00005;
    this.width = this.image.width * this.ratio;
    this.height = this.image.height * this.ratio;
    this.bubbleRadius = 10;
    this.increment = 0.2;
    this.vel = 0;
    this.bubblePos = [280, 350];
    this.space = [];
    this.pos = [];
    this.rect = [];
    this.increment = 0.1;
    this.vel = [0, 0.5];
    this.bubblePos = [];
    this.bubbleEmerging = false;
    this.bubbles = [];
    this.color = "rgba(120, 79, 8, 0.8)";
    this.smokeRadius = 15;
    this.boundary = 300;
    this.bubbleCount = 0;
  }


  draw(backgroundHeight, backgroundTop) {
    let ratio = window.innerWidth * 0.00035;
    this.height = this.image.height * ratio;
    this.width = this.image.width * ratio;
    let bottom = (backgroundHeight * 0.82) + backgroundTop;
    let topX = window.innerWidth * 0.25;
    let topY = bottom - this.height;

    this.ctx.drawImage(this.image, topX, topY, this.width, this.height);
    this.pos = [topX, topY];

    this.rect = [
      this.pos[0] + this.width * 0.05,
      this.pos[1] + this.height * 0.2,
      this.pos[0] + this.width * 0.9,
      this.pos[1] + this.height * 0.6]

    // this.ctx.fillStyle = "rgb(215, 232, 250, 0.4)";
    // this.ctx.fillRect(this.pos[0] + this.width * 0.05, this.pos[1] + this.height * 0.2, this.width * 0.9, this.height * 0.6)


  }

  makeFart() {
    // console.log('cow is farting')
    if (this.bubblePos.length === 0) {
      this.bubblePos = [this.pos[0] + (this.width * 0.08), this.pos[1] + (this.height * 0.3)];
    }

    let startPos = this.bubblePos.slice();

    if (!this.bubbleEmerging) {
      this.addBubble();
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
      [0, 0.6],
      [-0.1, 0.6],
      [0.1, 0.6],
      [0.3, 0.6],
      [-0.3, 0.6],
      [-0.2, 0.6],
      [0.2, 0.6]
    ]
    let vel = velocities[Math.floor(Math.random() * velocities.length)]
    let minRadii = [10, 5, 8, 12, 14]
    let minRadius = minRadii[Math.floor(Math.random() * minRadii.length)]
    let maxRadii = [18, 12, 14, 20, 25, 30]
    let maxRadius = maxRadii[Math.floor(Math.random() * maxRadii.length)]
    let startPositions = [
      this.bubblePos,
      [this.bubblePos[0] + 20, this.bubblePos[1] + 10]
    ]
    let startPos = startPositions[Math.floor(Math.random() * startPositions.length)]
      if (!this.bubbleEmerging && this.bubbleCount < 8) {
        let bubble1 = new Bubble({
          color: this.color,
          minRadius: 8,
          maxRadius: maxRadius,
          pos: startPositions[0],
          vel: vel,
          ctx: this.ctx,
          increment: this.increment,
          boundary: this.boundary
        })
        this.bubbles.push(bubble1);
        this.bubbleCount += 1;
    }

  }


}

export default Cow;