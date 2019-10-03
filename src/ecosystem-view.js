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
  }

  animate() {
    requestAnimationFrame(this.animate);
    this.ecosystem.update();
    this.ecosystem.draw();
  }

}


export default EcosystemView;