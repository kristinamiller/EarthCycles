import Ecosystem from './ecosystem';
import Bubble from './bubble';

class Carbon {
  constructor(options = {}) {
    this.ctx = options.ctx;
    this.startPos = options.startPos;
    // this.endPos = options.endPos;
    this.numBubbles = options.numBubbles;
    this.vel = [0, 1];
    this.bubbles = [];
    this.color = "magenta";
    this.defaultColor = this.color;
    this.colorChange = 0;
    this.increment = 0.5;
    this.bubbleEmerging = false;
    this.boundary = 0;
    this.bubblePos = [280, 350];
  }



  addBubble() {
    if (this.bubbles.length < this.numBubbles) {
      let bubble1 = new Bubble({
        color: this.color,
        colorChange: this.colorChange,
        defaultColor: this.defaultColor,
        minRadius: 25,
        maxRadius: 30,
        pos: this.startPos,
        vel: this.vel,
        ctx: this.ctx,
        increment: this.increment,
        boundary: this.boundary,
        text: 'CO2'
      })
      this.bubbles.push(bubble1);
    }
  }

  animate() {
    if (!this.bubbleEmerging) {
      this.addBubble();
    }
    for (let i = 0; i < this.bubbles.length; i++) {
      this.bubbles[i].draw();
      this.bubbles[i].animate();
      // this.bubbles[i].pos[1] += 1;
      // if (this.bubbles[i].pos[1] < this.startPos[1] - 3) {
      //   this.bubbleEmerging = false;
      // }
      // if (this.bubbles[i].pos[1] < -40) {
      //   this.bubbles.splice(i, 1);
      // }
    }
    // this.bubbles.forEach((bubble) => {
    //   if (bubble.pos[1] > this.startPos[1] - 3) {
    //     this.bubbleEmerging = true;
    //   }
    // })



  }


}

export default Carbon;