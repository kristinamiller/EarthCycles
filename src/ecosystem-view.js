import Ecosystem from './ecosystem';

class EcosystemView {
  constructor(ctx) {
    this.ctx = ctx;
    this.ecosystem = new Ecosystem(ctx);
    this.animate = this.animate.bind(this);
  }

  start() {
    this.ecosystem.draw();
    requestAnimationFrame(this.animate); //like an event handler 
    // this.makeBase();
  }

  // makeBase() {
  //   let baseImage = new Image();
  //   baseImage.src = '../assets/images/gradient-lake-background.png';
  //   baseImage.onload = function () {
  //     this.ctx.drawImage(baseImage, 0, 0);
  //   }
  // }

  animate() {
    requestAnimationFrame(this.animate);
    this.ecosystem.update();
    this.ecosystem.draw();
  }

}


export default EcosystemView;