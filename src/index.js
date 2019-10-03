import Ecosystem from './ecosystem';
import EcosystemView from './ecosystem-view';

document.addEventListener("DOMContentLoaded", function () {
  const canvasEl = document.getElementById("mycanvas");
  // canvasEl.width = 300;
  // canvasEl.height = 200;
  canvasEl.width = window.innerWidth;
  canvasEl.height = window.innerHeight;

  const ctx = canvasEl.getContext("2d");
  const ecosystem = new Ecosystem(ctx);
  new EcosystemView(ctx, ecosystem).start();
});