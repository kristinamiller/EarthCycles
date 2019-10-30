import Ecosystem from './ecosystem';
import EcosystemView from './ecosystem-view';

document.addEventListener("DOMContentLoaded", function () {
  const canvasEl = document.getElementById("mycanvas");
  // canvasEl.width = 300;
  // canvasEl.height = 200;
  canvasEl.width = window.innerWidth;
  canvasEl.height = window.innerHeight;


  const ctx = canvasEl.getContext("2d");

  const ecosystem = new Ecosystem(ctx, canvasEl);
  const ecosystemView = new EcosystemView(ctx, ecosystem);
  ecosystemView.start();

  let waterCycleButton = document.getElementById("water-cycle")
  waterCycleButton.addEventListener("click", (e) => {
    if (!ecosystemView.waterCycle) {
      ecosystemView.waterCycle = true;
    } else {
      ecosystemView.waterCycle = false;
    }
  })

  
  let carbonCycleButton = document.getElementById("carbon-cycle")
  carbonCycleButton.addEventListener("click", (e) => {
    if (!ecosystemView.carbonCycle) {
      ecosystemView.carbonCycle = true;
    } else {
      ecosystemView.carbonCycle = false;
    }
  })
  



});

