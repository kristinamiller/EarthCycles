import Ecosystem from './ecosystem';


class Tree {
  constructor(ctx, backgroundHeight, backgroundWidth) {
    this.image = new Image();
    this.image.src = '../assets/images/deciduous-tree.png';
    this.ctx = ctx;
    this.ratio = window.innerWidth * 0.00005;
    this.width = this.image.width * this.ratio;
    this.height = this.image.height * this.ratio;
    this.pos;
    this.rect;
  }


  draw(backgroundHeight, backgroundTop) {

    let ratio = window.innerWidth * 0.00007;
    this.width = this.image.width * ratio;
    this.height = this.image.height * ratio;
    let bottom = (backgroundHeight * 0.74) + backgroundTop;
    let topX = window.innerWidth * 0.36;
    let topY = bottom - this.height;
    this.pos = [topX, topY];

    this.ctx.drawImage(this.image, topX, topY, this.width, this.height);
    this.ctx.fillStyle = "rgb(215, 232, 250, 0.4)";
    this.ctx.fillRect(this.pos[0] + this.width * 0.05, this.pos[1] + this.height * 0.05, this.width * 0.9, this.height * 0.7)

    this.rect = [
      this.pos[0] + this.width * 0.05,
      this.pos[1] + this.height * 0.05,,
      this.pos[0] + this.width * 0.9,
      this.pos[1] + this.height * 0.7]
   
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

export default Tree;