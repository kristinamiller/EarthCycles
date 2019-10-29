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
    this.pos = [0, 0];
    if (this.pos) {
      this.rect = [
        this.pos[0] + this.width * 0.05, 
        this.pos[1] + this.height * 0.2, 
        this.pos[0] + this.width * 0.9, 
        this.pos[1] + this.height * 0.6]
    }
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

    // this.ctx.fillStyle = "rgb(215, 232, 250, 0.4)";
    // this.ctx.fillRect(this.pos[0] + this.width * 0.05, this.pos[1] + this.height * 0.2, this.width * 0.9, this.height * 0.6)


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