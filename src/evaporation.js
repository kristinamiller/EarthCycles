class Evaporation {
  constructor(ctx, pos) {
    this.ctx = ctx;
    this.pos = pos;
    this.origin = this.pos.slice();
    this.x1 = this.pos[0];
    this.x2 = this.pos[0] - 15;
    this.x2origin = this.pos[0] - 30;
    this.x3 = this.pos[0] + 15;
    this.x3origin = this.pos[0] + 20;
    this.x4 = this.pos[0];
    this.squiggleCount = 0.8;
    this.squiggleCount2 = -0.5;
  }

  draw(pos) {
    // this.ctx.beginPath();
    // this.ctx.rect(100, 100, 200, 500);
    // this.ctx.fillStyle = "red";
    // this.ctx.fill();
    this.pos = pos;

    let y1 = this.pos[1];
    let y2 = y1 - 40;
    let y3 = y1 - 50;
    let y4 = y1 - 90;
    let y5 = y1 - 120;
    let y6 = y1 - 150;
    this.ctx.beginPath();
    this.ctx.moveTo(this.x1, y1)
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
    let opposite = 1;
    if (this.x3 > this.origin[0] + 20) {
      this.squiggleCount = 0.8;
    }
    if (this.x3 < this.origin[0] - 20) {
      this.squiggleCount = -0.8;
    }


    // this.x1 -= this.squiggleCount;
    this.x3 -= this.squiggleCount;

    this.x2 += this.squiggleCount;
    // this.x4 -= this.squiggleCount;
    
   }
  
    

}

export default Evaporation;
