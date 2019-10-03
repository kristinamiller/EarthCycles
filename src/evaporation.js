class Evaporation {
  constructor(options = {}) {
    this.ctx = options.ctx;
    this.pos = [100, window.innerHeight * 0.8];
    this.origin = [100, window.innerHeight * 0.8];
    this.x1 = this.pos[0];
    this.x2 = this.pos[0] - 30;
    this.x2origin = this.pos[0] - 30;
    this.x3 = this.pos[0] + 30;
    this.x3origin = this.pos[0] + 30;
    this.x4 = this.pos[0];
    this.squiggleCount = 0.5;
    this.squiggleCount2 = -0.5;
  }

  draw() {
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
    this.ctx.strokeStyle = "green";
    this.ctx.lineWidth = 1;
    this.ctx.stroke();
  }

  evaporate() {
    let opposite = 0;
    if (this.x1 > this.origin[0] + 10) {
      this.squiggleCount = -0.5;
    }
    if (this.x1 < this.origin[0] - 10) {
      this.squiggleCount = 0.5;
    }
    if (this.x2 > this.origin[0] + 30) {
      this.squiggleCount2 = -0.5;
    }
    if (this.x2 < this.origin[0] - 30) {
      this.squiggleCount2 = 0.5;
    }

    this.x1 += this.squiggleCount;
    this.x3 += this.squiggleCount;

    this.x2 += this.squiggleCount2;
    this.x4 += this.squiggleCount2;
    
   }
  
    

}

export default Evaporation;
