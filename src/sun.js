class Sun {
  constructor(ctx) {
    this.image = new Image();
    this.image.src = '../assets/images/sun.png';
    this.ctx = ctx;
  }




  draw() {
    this.ctx.drawImage(this.image, -100, -100);
    
  }



}

export default Sun;