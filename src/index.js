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

  let waterCycleButton = document.getElementById("water-cycle");
  let carbonCycleButton = document.getElementById("carbon-cycle");

  waterCycleButton.addEventListener("click", (e) => {
    if (!ecosystemView.waterCycle) {
      ecosystemView.waterCycle = true;
      ecosystemView.carbonCycle = false;
      reselect(waterCycleButton);
      deselect(carbonCycleButton);
    } else {
      ecosystemView.waterCycle = false;
      ecosystemView.carbonCycle = true;
      deselect(waterCycleButton);
      reselect(carbonCycleButton);
    }
  })
  

  carbonCycleButton.addEventListener("click", (e) => {
    if (!ecosystemView.carbonCycle) {
      ecosystemView.carbonCycle = true;
      ecosystemView.waterCycle = false;
      reselect(carbonCycleButton);
      deselect(waterCycleButton);
    } else {
      ecosystemView.carbonCycle = false;
      ecosystemView.waterCycle = true;
      deselect(carbonCycleButton);
      reselect(waterCycleButton);
    }
  })
  

});

function deselect(button) {
  button.classList.remove('selected');
  button.classList.add('unselected');
}
function reselect(button) {
  button.classList.remove('unselected');
  button.classList.add('selected');
}

