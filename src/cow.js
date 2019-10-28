class Cow {
  constructor(ctx) {
    this.image = new Image();
    this.image.src = '../assets/images/cow-eating-grass.png';
    this.ctx = ctx;
    this.ratio = window.innerWidth * 0.00005;
    this.width = this.image.width * this.ratio;
    this.height = this.image.height * this.ratio;
    this.bubbleRadius = 10;
    this.increment = 0.5;
    this.vel = 0;
    this.bubblePos = [280, 350];
    this.space = [];
  }


  draw() {
    let ratio = window.innerWidth * 0.0003;
    let height = this.image.height * ratio;
    let width = this.image.width * ratio;
    // let height = 200;
    // let width = 200;

    this.ctx.drawImage(this.image, window.innerWidth * 0.2, window.innerHeight * 0.43, width, height);
  }

  makeFart(numBubbles) {
    for (let i = 0; i < numBubbles; i++) {
      this.ctx.beginPath();
      this.ctx.arc(this.bubblePos[0], this.bubblePos[1], this.bubbleRadius, 0, 2 * Math.PI, false);
      this.ctx.fillStyle = "rgba(224, 135, 94, 0.949)";
      this.ctx.fill();
    }

  }

  animate() {
    this.makeFart(1);
    if (this.bubbleRadius > 30) {
      this.increment = 0;
      this.vel = 1;
      this.makeFart(1);
    }
    this.bubbleRadius += this.increment;
    // this.bubblePos[1] -= this.vel;
  }

}

export default Cow;