class Evaporation {
  constructor(ctx, pos) {
    this.ctx = ctx;
    this.pos = pos;
    this.origin = this.pos.slice();
    this.x1 = this.pos[0];
    this.x2 = this.pos[0] - 15;
    this.x3 = this.pos[0] + 15;
    this.x4 = this.pos[0];
    this.y1 = this.pos[1];
    this.squiggleCount = 0.8;
    this.squiggleCount2 = -0.5;

  }

  draw(pos) {
    // this.ctx.beginPath();
    // this.ctx.rect(100, 100, 200, 500);
    // this.ctx.fillStyle = "red";
    // this.ctx.fill();
    this.pos = pos;

    let y2 = this.y1 - 40;
    let y3 = this.y1 - 50;
    let y4 = this.y1 - 90;
    let y5 = this.y1 - 120;
    let y6 = this.y1 - 150;
    this.ctx.beginPath();
    this.ctx.moveTo(this.x1, this.y1)
    this.ctx.bezierCurveTo(this.x2, y2, this.x3, y3, this.x4, y4);
    // this.ctx.bezierCurveTo(this.x4, y4, this.x2, y5, this.x1, y6);
    this.ctx.strokeStyle = "white";
    this.ctx.lineWidth = 1;
    this.ctx.stroke();

    this.ctx.beginPath();
    this.ctx.moveTo(this.x4, y4 - 10);
    this.ctx.lineTo(this.x4 + 5, y4);
    this.ctx.lineTo(this.x4 - 5, y4);
    this.ctx.fillStyle = "white";
    this.ctx.stroke();
    this.ctx.fill();

   

  }

  evaporate() {
    if (this.x3 > this.origin[0] + 20) {
      this.squiggleCount = 0.8;
    }
    if (this.x3 < this.origin[0] - 20) {
      this.squiggleCount = -0.8;
    }


    // this.x1 -= this.squiggleCount;
    this.x3 -= this.squiggleCount;

    this.x2 += this.squiggleCount;
    this.x4 += this.squiggleCount * 0.5;
    // this.rise();
   }
  
   rise() {
     this.y1 -= 1;
   }
    

}

export default Evaporation;
