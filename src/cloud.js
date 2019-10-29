class Cloud {
  constructor(ctx, pos) {
    this.ctx = ctx;
    this.width = 200;
    this.height = 100;
    this.increment = 0.5;
    this.pos = pos;
    this.color = "rgb(215, 232, 250)";
    this.vel = 1;
    this.raining = false;
    if (this.pos) {
      this.rect = [this.pos[0] - 110, this.pos[1] - 50, this.pos[0] + 90, this.pos[1] + 50]
    }
  }


  draw() {
    this.ctx.beginPath();
    this.ctx.arc(this.pos[0] + 15, this.pos[1] + 35, 25, 0, 2 * Math.PI, false);
    this.ctx.fillStyle = "pink";
    this.ctx.fillStyle = this.color;
    this.ctx.fill();

    this.ctx.beginPath();
    this.ctx.arc(this.pos[0] - 30, this.pos[1] + 30, 35, 0, 2 * Math.PI, false);
    this.ctx.fillStyle = "green";
    this.ctx.fillStyle = this.color;
    this.ctx.fill();

    this.ctx.beginPath();
    this.ctx.arc(this.pos[0] - 80, this.pos[1] + 30, 30, 0, 2 * Math.PI, false);
    this.ctx.fillStyle = "purple";
    this.ctx.fillStyle = this.color;
    this.ctx.fill();

    this.ctx.beginPath();
    this.ctx.arc(this.pos[0] - 40, this.pos[1] + 5, 30, 0, 2 * Math.PI, false);
    this.ctx.fillStyle = "blue";
    this.ctx.fillStyle = this.color;
    this.ctx.fill();

    this.ctx.beginPath();
    this.ctx.arc(this.pos[0] + 60, this.pos[1] + 30, 30, 0, 2 * Math.PI, false);
    this.ctx.fillStyle = this.color;
    this.ctx.fill();

    this.ctx.beginPath();
    this.ctx.arc(this.pos[0] + 45, this.pos[1] + 5, 20, 0, 2 * Math.PI, false);
    this.ctx.fillStyle = this.color;
    // this.ctx.fillStyle = "green";
    this.ctx.fill();

    this.ctx.beginPath();
    this.ctx.arc(this.pos[0] + 15, this.pos[1] - 25, 35, 0, 2 * Math.PI, false);
    this.ctx.fillStyle = "green";
    this.ctx.fillStyle = this.color;
    this.ctx.fill();

    this.ctx.beginPath();
    this.ctx.arc(this.pos[0] + 5, this.pos[1] - 5, 30, 0, 2 * Math.PI, false);
    this.ctx.fillStyle = this.color;
    // this.ctx.fillStyle = "green";
    this.ctx.fill();


  }

  animate() {
    if (this.pos[0] > window.innerWidth - 100) {
      this.vel = -1;
    }
    if (this.pos[0] < 100) {
      this.vel = 1;
    }
    this.pos[0] += this.vel;
    this.rect = [this.pos[0] - 110, this.pos[1] - 50, this.pos[0] + 90, this.pos[1] + 50]
  }

  

  // pulse() {
  //   if (this.width > 230) {
  //     this.increment = -0.5;
  //   } 
  //   if (this.width < 200) {
  //     this.increment = 0.5;
  //   }
  //   this.width += this.increment;
  //   this.height += this.increment;
  //   this.pos[0] -= (this.increment / 2);
  //   this.pos[1] -= (this.increment / 2);
  // }

}

export default Cloud;