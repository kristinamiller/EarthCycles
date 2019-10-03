class Evaporation {
  constructor(options = {}) {
    this.ctx = options.ctx;
    this.pos = [100, window.innerHeight * 0.8]
  }


  draw() {
    let x1 = this.pos[0];
    let x2 = x1 - 30;
    let x3 = x1 + 30;
    let y1 = this.pos[1];
    let y2 = y1 - 40;
    let y3 = y1 - 50;
    let y4 = y1 - 90;
    let y5 = y1 - 120;
    let y6 = y1 - 150;
    this.ctx.beginPath();
    this.ctx.moveTo(x1, y1)
    this.ctx.bezierCurveTo(x2, y2, x3, y3, x1, y4);
    this.ctx.bezierCurveTo(x1, y4, x2, y5, x1, y6);
    // this.ctx.lineTo(this.pos[0], this.pos[1] - 10);
    this.ctx.strokeStyle = "green";
    this.ctx.lineWidth = 1;
    this.ctx.stroke();
  }

  evaporate() {

  }



}

export default Evaporation;
