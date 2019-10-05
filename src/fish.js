class Fish {
  constructor(ctx) {
    this.image = new Image();
    this.image.src = '../assets/images/cute-orange-fish.png';
    this.ctx = ctx;
    this.ratio = window.innerWidth * 0.00005;
    this.width = this.image.width * this.ratio;
    this.height = this.image.height * this.ratio;
  }


  draw() {
    let ratio = window.innerWidth * 0.00005;
    let height = this.image.height * ratio;
    let width = this.image.width * ratio;
    // let height = 200;
    // let width = 200;

    this.ctx.drawImage(this.image, window.innerWidth * 0.7, window.innerHeight * 0.8, width, height);
  }

  makeSmoke() {

  }

  animate() {

  }

}

export default Fish;