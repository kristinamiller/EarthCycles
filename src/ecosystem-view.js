import Ecosystem from './ecosystem';

class EcosystemView {
  constructor(ctx) {
    this.ctx = ctx;
    this.ecosystem = new Ecosystem(ctx);
    this.animate = this.animate.bind(this);
  }

  start() {
    let context = this.ctx;
    let ecosystem = this.ecosystem;
    let baseImage = new Image();
    let that = this;
    baseImage.src = '../assets/images/ecosystem-background.png';
    baseImage.onload = function () {
      context.drawImage(baseImage, 0, 0, window.innerWidth, 500);
      ecosystem.draw();
      requestAnimationFrame(that.animate); 
    }
  }



  animate() {
    requestAnimationFrame(this.animate);
    this.ecosystem.update();
    this.ecosystem.draw();
  }

}


export default EcosystemView;