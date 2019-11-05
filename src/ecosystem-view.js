import Ecosystem from './ecosystem';

class EcosystemView {
  constructor(ctx) {
    this.ctx = ctx;
    this.ecosystem = new Ecosystem(ctx);
    this.animate = this.animate.bind(this);
    this.waterCycle = false;
    this.carbonCycle = true;
    this.currentCycle = "water";
  }

  start() {
    let context = this.ctx;
    let ecosystem = this.ecosystem;
    let baseImage = new Image();
    let that = this;
    baseImage.src = '../assets/images/ecosystem-background.png';
    baseImage.onload = function () {
      context.drawImage(baseImage, 0, 0, window.innerWidth, 500);
      // ecosystem.draw();
      // ecosystem.drawWaterCycle();
      requestAnimationFrame(that.animate); 
    }
  }



  animate() {
    requestAnimationFrame(this.animate);
    this.ecosystem.update();
    this.ecosystem.draw();
    if (this.waterCycle) {
      this.ecosystem.drawWaterCycle();
    }
    if (this.carbonCycle) {
      this.ecosystem.drawCarbonCycle();
      
    }
  }

}


export default EcosystemView;