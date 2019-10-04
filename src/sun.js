class Sun {
  constructor(ctx) {
    this.image = new Image();
    this.image.src = '../assets/images/sun2.png';
    this.ctx = ctx;
  }




  draw() {
    let ratio = window.innerWidth * 0.00005;
    let height = this.image.height * ratio;
    let width = this.image.width * ratio;
    this.ctx.drawImage(this.image, window.innerWidth * 0.7, window.innerHeight * 0.05, width, height);
  }

  rotate() {
    
  }

}

export default Sun;