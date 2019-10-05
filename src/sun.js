class Sun {
  constructor(ctx) {
    this.image = new Image();
    this.image.src = '../assets/images/sun2.png';
    this.ctx = ctx;
    this.ratio = window.innerWidth * 0.00005;
    this.width = this.image.width * this.ratio;
    this.height = this.image.height * this.ratio;
  }




  draw() {

    let ratio = window.innerWidth * 0.00005;
    // let height = this.image.height * ratio;
    // let width = this.image.width * ratio;
    let height = 200;
    let width = 200;

    this.ctx.drawImage(this.image, window.innerWidth * 0.65, 50, width, height);
  }

  animate() {
    if (this.width > 230) {
      this.increment = -0.5;
    }
    if (this.width < 200) {
      this.increment = 0.5;
    }
    this.width += this.increment;
    this.height += this.increment;
    this.pos[0] -= (this.increment / 2);
    this.pos[1] -= (this.increment / 2);
  }

}

export default Sun;