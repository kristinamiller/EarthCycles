class Fish {
  constructor(ctx) {
    this.image = new Image();
    this.image.src = '../assets/images/cute-orange-fish.png';
    this.ctx = ctx;
    this.ratio = window.innerWidth * 0.00005;
    this.width = this.image.width * this.ratio;
    this.height = this.image.height * this.ratio;
    this.pos = [0, 0];
    if (this.pos) {
      this.rect = [this.pos[0], this.pos[1], this.pos[0] + this.width, this.pos[1] + this.height]
    }
  }


  draw(backgroundHeight, backgroundTop) {
    let ratio = window.innerWidth * 0.00005;
    // let height = this.image.height * ratio;
    // let width = this.image.width * ratio;

    // this.ctx.drawImage(this.image, window.innerWidth * 0.7, window.innerHeight * 0.8, width, height);

    this.height = this.image.height * ratio;
    this.width = this.image.width * ratio;
    let bottom = (backgroundHeight * 0.95) + backgroundTop;
    let topX = window.innerWidth * 0.7;
    let topY = bottom - this.height;

    this.ctx.drawImage(this.image, topX, topY, this.width, this.height);
    this.pos = [topX, topY];

    // this.ctx.fillStyle = "rgb(215, 232, 250, 0.4)";
    // this.ctx.fillRect(this.pos[0], this.pos[1], this.width, this.height)
  }



  animate() {

  }

}

export default Fish;