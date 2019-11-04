import Ecosystem from './ecosystem';
import Factory from './factory';

class Bubble {
  constructor(options = {}) {
    this.color = options.color;
    if (this.color) {
      this.finalColor = `rgba(
      ${this.color[0]},
      ${this.color[1]},
      ${this.color[2]},
      ${this.transparency}
      )`
    }
    this.defaultColor = options.defaultColor;
    this.colorChange = options.colorChange;
    this.transparency = 1;
    this.minRadius = options.minRadius;
    this.maxRadius = options.maxRadius;
    if (options.pos) {
      this.pos = options.pos.slice();
      this.startPos = options.pos.slice();
    }
    this.vel = options.vel;
    this.speed = options.speed;
    this.ctx = options.ctx;
    this.increment = options.increment;
    this.boundary = options.boundary;
    this.animate = this.animate.bind(this);
    this.text = options.text;
    this.endPosY = options.endPosY;
    this.type = options.type;
    this.ecosystem = options.ecosystem;
    this.border = 10;
    this.bubbleID = options.bubbleID;
    this.funnelPos = [];
    // this.ecosystem = options.ecosystem;
    // this.backgroundHeight = options.backgroundHeight;
    // this.backgroundTop = options.backgroundTop;
  }



  draw() {
    this.ctx.beginPath();
    this.ctx.arc(this.pos[0], this.pos[1], this.minRadius, 0, 2 * Math.PI, false);
    this.ctx.fillStyle = this.defaultColor;
    this.ctx.fillStyle = `${this.finalColor}`;
    this.ctx.fill();

    if (this.text) {
      this.ctx.font = '26px sans-serif';
      this.ctx.fillStyle = "white";
      this.ctx.fillText(this.text, this.pos[0] - 10, this.pos[1] + 10)   
    }
  }

  animate() {
      if (this.minRadius > this.maxRadius) {
        this.increment = 0;
      }
      if (this.pos[0] < this.startPos[0] - this.boundary || this.pos[0] > this.startPos[0] + this.boundary) {
        this.vel[0] = 0;
      }

      this.minRadius += this.increment;
      this.pos[0] -= this.vel[0];
      this.pos[1] -= this.vel[1];
      // this.pos[1] -= 1;

      this.transparency -= this.colorChange;
      this.finalColor = `rgba(
    ${this.color[0]},
    ${this.color[1]},
    ${this.color[2]},
    ${this.transparency}
    )`
    

  }

  drawCarbon(startLocation) {
    let backgroundHeight = this.ecosystem.backgroundHeight;
    let backgroundTop = this.ecosystem.backgroundTop;

    if (!this.pos && startLocation == "ground") {
      let yPos1 = (backgroundHeight * 0.88) + backgroundTop;
      let yPos2 = (backgroundHeight * 0.93) + backgroundTop;
      let xPos = window.innerWidth;

      let startPositions = [
        [xPos * (0.05 + this.bubbleID * 0.04), yPos1],
        [xPos * (0.05 + this.bubbleID * 0.04), yPos2],
        [xPos * (0.05 + this.bubbleID * 0.04), yPos1],
        [xPos * (0.05 + this.bubbleID * 0.04), yPos2],
        [xPos * (0.05 + this.bubbleID * 0.04), yPos1],
        [xPos * (0.05 + this.bubbleID * 0.04), yPos2]
      ]
      this.pos = startPositions[this.bubbleID];
    }



    this.ctx.beginPath();
    this.ctx.arc(this.pos[0], this.pos[1], this.minRadius, 0, 2 * Math.PI, false);
    this.ctx.fillStyle = this.defaultColor;
    this.ctx.fillStyle = `${this.finalColor}`;
    this.ctx.fill();

    this.ctx.font = '26px sans-serif';
    this.ctx.fillStyle = "white";
    this.ctx.fillText(this.text, this.pos[0] - 10, this.pos[1] + 10)
    
  }

  
  animateCarbon(funnelPoint, destination) {
    let endPercentX;
    let endPercentY = [];
    if (destination === "sky") {
      endPercentX = [0.55, 0.6, 0.65, 0.7, 0.75, 0.8];
      endPercentY = [0.3, 0.35, 0.3, 0.35, 0.3, 0.35];
    }

    let velocities = [
      [0, 4],
      [-0.2, 0.1],
      [0.2, 3],
      [0.3, 5],
      [-0.3, 2]
    ]
    let vel = velocities[Math.floor(Math.random() * velocities.length)]

    

    if (funnelPoint === "factory") {
      this.funnelPos = this.ecosystem.factory.smokePos;
    }
    this.vel = vel;
    if (this.pos[0] < this.funnelPos[0] - 1) { 
      this.vel[0] = 0.3;
    }
    if (this.pos[0] > this.funnelPos[0] + 1) {
      this.vel[0] = -0.3;
    }
    if (this.pos[1] < window.innerHeight * endPercentY[this.bubbleID]) {
      this.vel = [2, 0];
    }
    if (this.pos[0] > window.innerWidth * endPercentX[this.bubbleID]) {
      this.vel = [0,0];
    }
    this.pos[0] += this.vel[0];
    this.pos[1] -= this.vel[1];
  }

  pulse() {
    if (this.minRadius < this.maxRadius - 5) {
      this.increment = 0.05;
    } 
    if (this.minRadius > this.maxRadius) {
      this.increment = -0.05;
    }
    this.minRadius += this.increment;
  }

  jiggle() {
    // // this.vel[0] = -0.5;
    // if (this.pos[0] < this.startPos[0] - 10)  {
    //   this.vel[0] = -this.vel[0];
    // }
    // if (this.pos[0] < this.startPos[0] + 10)  {
    //   this.vel[0] = -this.vel[0];
    // }
    // this.pos[0] += this.vel[0];

    if (this.transparency < 0.6) {
      this.colorChange = -this.colorChange
    } 
    
    if (this.transparency > 1) {
      this.colorChange = -this.colorChange
    }

    this.transparency -= this.colorChange;
    this.finalColor = `rgba(
    ${this.color[0]},
    ${this.color[1]},
    ${this.color[2]},
    ${this.transparency}
    )`

    
  }

}



export default Bubble;