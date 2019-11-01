import Bubble from './bubble';
import Carbon from './carbon';

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
    this.carbonBubbles = [];
    this.carbonMoving = true;
    this.boundary = 20;

    if (this.pos) {
      this.rect = [this.pos[0], this.pos[1], this.pos[0] + this.width, this.pos[1] + this.height]
    }
  }



  draw(backgroundHeight, backgroundTop) {

    let ratio = window.innerWidth * 0.0005;
    this.width = this.image.width * ratio;
    this.height = this.image.height * ratio;
    let bottom = (backgroundHeight * 0.75) + backgroundTop;
    let topX = window.innerWidth * 0.02;
    let topY = bottom - this.height;

    this.ctx.drawImage(this.image, topX, topY, this.width, this.height);
    this.pos = [topX, topY];

    // this.ctx.fillRect(this.pos[0], this.pos[1], this.width, this.height)

  }

  makeSmoke() {
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

      if (this.bubbles[i].pos[1] < startPos[1] - 1) {
        this.bubbleEmerging = false;
      } 
      if (this.bubbles[i].pos[1] < -40) {
        this.bubbles.splice(i, 1);
      }
    }
    this.bubbles.forEach((bubble) => {
      if (bubble.pos[1] > startPos[1] - 1) {
        this.bubbleEmerging = true;
      } 
    })

    for (let i = 0; i < this.carbonBubbles.length; i++) {
      if (this.carbonMoving) {
        this.carbonBubbles[i].draw();
        this.carbonBubbles[i].animate(); 
      } else {
        this.carbonBubbles[i].draw();
        this.carbonBubbles[i].pulse();
      }
    }

    // if ( )


    // this.addCarbonBubbles();
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
    let maxRadii = [22, 25, 28, 30, 32]
    let maxRadius = maxRadii[Math.floor(Math.random() * maxRadii.length)]
    let startPositions = [
      this.smokePos,
      [this.smokePos[0] + this.width * 0.08, this.smokePos[1] + this.height * 0.06]
    ]
    let endRatios = [0.16, 0.12, 0.14, 0.17, 0.23]
    let endRatio = endRatios[Math.floor(Math.random() * endRatios.length)]

    if (!this.bubbleEmerging && this.bubbles.length < 70) {
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

      // if (this.bubbles.length == 2 || this.bubbles.length % 8 == 0) {
      //   let carbonBubble = new Bubble({
      //     color: "magenta",
      //     colorChange: this.colorChange,
      //     defaultColor: "magenta",
      //     minRadius: 20,
      //     maxRadius: 25,
      //     pos: [window.innerWidth * 0.1, window.innerHeight * 0.9],
      //     endPosY: window.innerHeight * endRatio,
      //     vel: [0.2, 1],
      //     ctx: this.ctx,
      //     increment: 0.08,
      //     boundary: maxRadius,
      //     text: 'CO2',
      //     type: "carbon",
      //     factory: this
      // }) 
      //   this.carbonBubbles.push(carbonBubble);
      // }
    
      
    }
  }

  addCarbonBubbles() {
    let startPositions = [
      [window.innerWidth * 0.05, window.innerHeight * 0.89],
      [window.innerWidth * 0.09, window.innerHeight * 0.95],
      [window.innerWidth * 0.13, window.innerHeight * 0.88],
      [window.innerWidth * 0.16, window.innerHeight * 0.94],
      [window.innerWidth * 0.20, window.innerHeight * 0.88]
    ]
    let endPositions = [
      [window.innerWidth * 0.05, window.innerHeight * 0.1],
      [window.innerWidth * 0.09, window.innerHeight * 0.1],
      [window.innerWidth * 0.13, window.innerHeight * 0.1],
      [window.innerWidth * 0.16, window.innerHeight * 0.1],
      [window.innerWidth * 0.20, window.innerHeight * 0.1]
    ]

    for (let i = 0; i < 5; i++) {
      let bubble1 = new Bubble({
        color: "magenta",
        colorChange: this.colorChange,
        defaultColor: "magenta",
        minRadius: 25,
        maxRadius: 30,
        pos: startPositions[i],
        vel: this.vel,
        ctx: this.ctx,
        increment: this.increment,
        boundary: this.boundary,
        text: 'CO2'
      })
        bubble1.draw();
        bubble1.animate();
      }
      
    }
    
  

}

export default Factory;