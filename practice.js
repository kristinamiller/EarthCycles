document.addEventListener("DOMContentLoaded", function(){
  const canvasEl = document.getElementById("mycanvas");
  canvasEl.width = window.innerWidth;
  canvasEl.height = window.innerHeight;



  const ctx = canvasEl.getContext("2d");
  ctx.fillStyle = "purple";
  ctx.fillRect(0, 0, canvasEl.width, canvasEl.height);
  
  ctx.beginPath();
  ctx.arc(300, 300, 20, 0, 2 * Math.PI, true);
  ctx.strokeStyle = "white";
  ctx.lineWidth = 1;
  ctx.stroke();
  ctx.fillStyle = "lightgray";
  ctx.fill();


});
