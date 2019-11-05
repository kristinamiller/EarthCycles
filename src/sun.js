class Sun {
  constructor(ctx) {
    this.image = new Image();
    this.image.src = '../assets/images/sun2.png';
    this.ctx = ctx;
    this.ratio;
    this.width;
    this.height;
    this.pos;
    this.rect;
    this.topX;
    this.topY;
    this.increment = 1;
    this.count = 0;
  }




  draw(backgroundHeight, backgroundTop, ecosystem) {

    this.ecosystem = ecosystem;
    let ratio = window.innerWidth * 0.00005;
    // let height = this.image.height * ratio;
    // let width = this.image.width * ratio;
    let height = 200;
    let width = 200;

    // this.ctx.drawImage(this.image, window.innerWidth * 0.65, 50, width, height);

    if (!ecosystem.photosynthesis) {
      this.ratio = window.innerWidth * 0.00004;
      this.width = this.image.width * this.ratio;
      this.height = this.image.height * this.ratio;
      this.topX = window.innerWidth * 0.65;
      this.topY = window.innerHeight * 0.10;
    }
    this.pos = [this.topX, this.topY];

    this.ctx.drawImage(this.image, this.pos[0], this.pos[1], this.width, this.height);
    // this.ctx.fillStyle = "rgb(215, 232, 250, 0.4)";
    // this.ctx.fillRect(this.pos[0] + this.width * 0.1, this.pos[1] + this.height * 0.1, this.width * 0.8, this.height * 0.8)

    this.rect = [
      this.pos[0] + this.width * 0.05,
      this.pos[1] + this.height * 0.05,
      this.pos[0] + this.width * 0.9,
      this.pos[1] + this.height * 0.7]





  }

  animate() {
    if (this.width > (this.image.width * this.ratio + 40)) {
      this.increment = -this.increment;
    }
    if (this.width < (this.image.width * this.ratio)) {
      this.increment = -this.increment;
    }
    if (this.count > 500) {
      this.increment = 0;
    } 
    if (this.count > 1000) {
      this.ecosystem.photosynthesis = false;
    }
    this.width += this.increment;
    this.height += this.increment;
    this.topX -= (this.increment / 2);
    this.topY -= (this.increment / 2);
    this.count += 1;
    // console.log(this.count)
  }

}

export default Sun;