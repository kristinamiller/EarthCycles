class Cloud {
  constructor(ctx) {
    this.ctx = ctx;
    this.width = 200;
    this.height = 100;
    this.increment = 0.5;
    this.pos = [300, 100];
  }




  draw() {
    // let ratio = window.innerWidth * 0.00005;
    // this.ctx.fillStyle = "rgba(188, 216, 245)";
    // this.ctx.fillRect(this.pos[0], this.pos[1], this.width, this.height);

    this.ctx.beginPath();
    this.ctx.arc(this.pos[0] + 15, this.pos[1] + 35, 25, 0, 2 * Math.PI, false);
    this.ctx.fillStyle = "pink";
    this.ctx.fillStyle = "rgba(188, 216, 245)";
    this.ctx.fill();

    this.ctx.beginPath();
    this.ctx.arc(this.pos[0] - 30, this.pos[1] + 30, 35, 0, 2 * Math.PI, false);
    this.ctx.fillStyle = "green";
    this.ctx.fillStyle = "rgba(188, 216, 245)";
    this.ctx.fill();

    this.ctx.beginPath();
    this.ctx.arc(this.pos[0] - 80, this.pos[1] + 30, 30, 0, 2 * Math.PI, false);
    this.ctx.fillStyle = "purple";
    this.ctx.fillStyle = "rgba(188, 216, 245)";
    this.ctx.fill();

    this.ctx.beginPath();
    this.ctx.arc(this.pos[0] - 40, this.pos[1] + 5, 30, 0, 2 * Math.PI, false);
    this.ctx.fillStyle = "blue";
    this.ctx.fillStyle = "rgba(188, 216, 245)";
    this.ctx.fill();


    this.ctx.beginPath();
    this.ctx.arc(this.pos[0] + 60, this.pos[1] + 30, 30, 0, 2 * Math.PI, false);
    this.ctx.fillStyle = "rgba(188, 216, 245)";
    this.ctx.fill();


    this.ctx.beginPath();
    this.ctx.arc(this.pos[0] + 45, this.pos[1] + 5, 20, 0, 2 * Math.PI, false);
    this.ctx.fillStyle = "rgba(188, 216, 245)";
    // this.ctx.fillStyle = "green";
    this.ctx.fill();

    this.ctx.beginPath();
    this.ctx.arc(this.pos[0] + 15, this.pos[1] - 25, 35, 0, 2 * Math.PI, false);
    this.ctx.fillStyle = "green";
    this.ctx.fillStyle = "rgba(188, 216, 245)";
    this.ctx.fill();

    this.ctx.beginPath();
    this.ctx.arc(this.pos[0] + 5, this.pos[1] - 5, 30, 0, 2 * Math.PI, false);
    this.ctx.fillStyle = "rgba(188, 216, 245)";
    // this.ctx.fillStyle = "green";
    this.ctx.fill();



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