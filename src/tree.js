import Ecosystem from './ecosystem';


class Tree {
  constructor(ctx, backgroundHeight, backgroundWidth) {
    this.image = new Image();
    this.image.src = '../assets/images/deciduous-tree.png';
    this.ctx = ctx;
    this.ratio;
    this.width;
    this.height;
    this.pos;
    this.rect;
    this.topX;
    this.topY;
    this.increment = 0.5;
  }


  draw(backgroundHeight, backgroundTop, ecosystem) {

    if (!ecosystem.photosynthesis) {
      this.ratio = window.innerWidth * 0.00007;
      this.width = this.image.width * this.ratio;
      this.height = this.image.height * this.ratio;
      this.topX = window.innerWidth * 0.36;
    }
    let bottom = (backgroundHeight * 0.74) + backgroundTop;
    this.topY = bottom - this.height;
    this.pos = [this.topX, this.topY];

    this.ctx.drawImage(this.image, this.pos[0], this.pos[1], this.width, this.height);
    // this.ctx.fillStyle = "rgb(215, 232, 250, 0.4)";
    // this.ctx.fillRect(this.pos[0] + this.width * 0.05, this.pos[1] + this.height * 0.05, this.width * 0.9, this.height * 0.7)

    this.rect = [
      this.pos[0] + this.width * 0.05,
      this.pos[1] + this.height * 0.05,
      this.pos[0] + this.width * 0.9,
      this.pos[1] + this.height * 0.7]
   
  }

  animate() {
    if (this.width > (this.image.width * this.ratio + 80)) {
      this.increment = 0;
    }
    if (this.width < (this.image.width * this.ratio + 50)) {
      this.increment = 0.5;
    }
    this.width += this.increment;
    this.height += this.increment;
    this.topX -= (this.increment / 2);
  }

}

export default Tree;