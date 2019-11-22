import Ecosystem from './ecosystem';


class Tree {
  constructor(ctx) {
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

    if (!this.width) {
      this.ratio = window.innerWidth * 0.00006;
      this.width = this.image.width * this.ratio;
      this.height = this.image.height * this.ratio;
      this.topX = window.innerWidth * 0.4;
    }
    let bottom = (backgroundHeight * 0.74) + backgroundTop;
    this.topY = bottom - this.height;
    this.pos = [this.topX, this.topY];

    this.ctx.drawImage(this.image, this.pos[0], this.pos[1], this.width, this.height);

    this.rect = [
      this.pos[0] + this.width * 0.05,
      this.pos[1] + this.height * 0.05,
      this.pos[0] + this.width * 0.9,
      this.pos[1] + this.height * 0.7]
   
    this.makeClickListener(ecosystem);
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


  makeClickListener(ecosystem) {

    let coordinates = [
      this.pos[0] + this.width * 0.5,
      this.pos[1] + this.height * 0.05,
      this.pos[0] + this.width * 0.9,
      this.pos[1] + this.height * 0.7
    ]

    document.addEventListener('click', () => {
      let x = event.pageX;
      let y = event.pageY;
      if (x > coordinates[0] && x < coordinates[2] && y > coordinates[1] && y < coordinates[3]) {
        ecosystem.photosynthesis = true;
        ecosystem.displayText("tree");
        ecosystem.sun.count = 0;
        if (ecosystem.carbonLocation === "sky") {
          ecosystem.carbonFunnel = "tree";
          ecosystem.carbonDestination = "ground";
          ecosystem.carbonMoving = true;
        }
      }
    })

  }



}

export default Tree;