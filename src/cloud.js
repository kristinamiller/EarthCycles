class Cloud {
  constructor(ctx) {
    this.ctx = ctx;
    this.width = 200;
    this.height = 200;
    this.increment = 0.5;
    this.pos = [100, 100];
  }




  draw() {
    let ratio = window.innerWidth * 0.00005;
    this.ctx.fillStyle = "rgba(200, 0, 200, 0.5)";
    this.ctx.fillRect(this.pos[0], this.pos[1], this.width, this.height);
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

export default Cloud;