class Sun {
  constructor(ctx) {
    this.image = new Image();
    this.image.src = '../assets/images/sun.png';
    this.ctx = ctx;
  }




  draw() {
    this.ctx.drawImage(this.image, 0, 0);
    
  }



}

export default Sun;