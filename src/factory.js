class Factory {
  constructor(ctx) {
    this.image = new Image();
    this.image.src = '../assets/images/factory2.png';
    this.ctx = ctx;
    this.ratio = window.innerWidth * 0.00005;
    this.width = this.image.width * this.ratio;
    this.height = this.image.height * this.ratio;
  }


  draw() {

    let ratio = window.innerWidth * 0.0004;
    let height = this.image.height * ratio;
    let width = this.image.width * ratio;
    // let height = 200;
    // let width = 200;

    this.ctx.drawImage(this.image, window.innerWidth * 0.02, window.innerHeight * 0.3, width, height);
  }

  makeSmoke() {
    for (let i = 0; i < numBubbles; i++) {
      this.ctx.beginPath();
      this.ctx.arc(this.bubblePos[0], this.bubblePos[1], this.bubbleRadius, 0, 2 * Math.PI, false);
      this.ctx.fillStyle = "rgba(224, 135, 94, 0.949)";
      this.ctx.fill();
    }
  }

  animate() {
 
  }

}

export default Factory;