class Cow {
  constructor(ctx) {
    this.image = new Image();
    this.image.src = '../assets/images/cow-eating-grass.png';
    this.ctx = ctx;
    this.ratio = window.innerWidth * 0.00005;
    this.width = this.image.width * this.ratio;
    this.height = this.image.height * this.ratio;
  }


  draw() {
    let ratio = window.innerWidth * 0.0003;
    let height = this.image.height * ratio;
    let width = this.image.width * ratio;
    // let height = 200;
    // let width = 200;

    this.ctx.drawImage(this.image, window.innerWidth * 0.2, window.innerHeight * 0.43, width, height);
  }

  makeFarts() {

  }

  animate() {

  }

}

export default Cow;