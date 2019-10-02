document.addEventListener("DOMContentLoaded", function(){
  const canvasEl = document.getElementById("mycanvas");
  canvasEl.width = window.innerWidth;
  canvasEl.height = window.innerHeight;



  const ctx = canvasEl.getContext("2d");

  // //rectangle
  // ctx.fillStyle = "rgba(200, 0, 200, 0.5)";
  // ctx.fillRect(100, 100, 100, 100);
  // ctx.fillStyle = "rgba(100, 0, 200, 0.3)";
  // ctx.fillRect(300, 100, 100, 100);
  
  // // circle
  // ctx.beginPath();
  // ctx.arc(300, 300, 50, 0, 5, true);
  // ctx.strokeStyle = "blue";
  // ctx.lineWidth = 1;
  // ctx.stroke();
  // ctx.arc(300, 180, 50, 2, 3.5, false);
  // ctx.strokeStyle = "blue";
  // ctx.lineWidth = 1;
  // ctx.stroke();

  // ctx.beginPath();
  // ctx.arc(100, 100, 20, 0, 2 * Math.PI, true);
  // ctx.strokeStyle = "white";
  // ctx.lineWidth = 1;
  // ctx.stroke();
  // ctx.fillStyle = "lightgray";
  // ctx.fill();

  // ctx.beginPath();
  // ctx.arc(1000, 500, 40, 0, 2 * Math.PI, false);
  // ctx.fillStyle = "blue";
  // ctx.fill();
  // ctx.strokeStyle = "green";
  // ctx.stroke();

  // let x = Math.random() * innerWidth;
  // let dx = (Math.random() - 0.5) * 10;
  // let y = Math.random() * innerHeight;
  // let dy = (Math.random() - 0.5) * 10;
  // let radius = 40

  function Circle(x, y) {
    this.x = x;
    this.y = y;

    this.draw = function() {
      console.log('this is the draw function');
      // ctx.beginPath();
      // ctx.arc(x, y, radius, 0, 2 * Math.PI, false);
      // ctx.fillStyle = "pink";
      // ctx.fill();
    }


  }

  let circle = new Circle(200, 200)
  circle.draw;
  
  function animate() {
    requestAnimationFrame(animate);
    // ctx.clearRect(0,0, innerWidth, innerHeight);

    

    // ctx.beginPath();
    // ctx.arc(x, y, radius, 0, 2 * Math.PI, false);
    // ctx.fillStyle = "rgba(100, 0, 200, 1)";
    // ctx.fill();
    // // ctx.strokeStyle = "green";
    // // ctx.stroke();
    // if ((x + radius) > innerWidth || (x - radius) < 0) {
    //   dx = -dx;
    // }
    // if ((y + radius) > innerHeight || (y - radius) < 0) {
    //   dy = -dy;
    // }
    // x += dx;
    // y += dy;
  }

  // animate();

  // ctx.beginPath();
  // ctx.moveTo(50, 300); //starting point
  // ctx.lineTo(250, 100); //ending point
  // ctx.lineTo(400, 300); 
  // ctx.lineTo(500, 100); 
  // ctx.lineTo(600, 300); 
  // ctx.strokeStyle = "red";
  // ctx.stroke();

  // function getRandomNum(min, max) {
  //   return Math.floor((Math.random() * (max - min) + min))
  // }

  // function getRandomDecimal(min, max) {
  //   return (Math.random() * (max - min) + min)
  // }


  // for (let i = 0; i < 20; i++) {
  //   let x = getRandomNum(700, 750);
  //   let y = getRandomNum(300, 500);
  //   let randomSize = getRandomNum(10, 20);
  //   let randomColor = getRandomNum(50, 100);
  //   let randomDecimal = getRandomDecimal(0.5, 0.8)
  //   ctx.beginPath();
  //   ctx.arc(x, y, randomSize, 0, Math.PI*2, false)
  //   // ctx.strokeStyle = "white";
  //   // ctx.stroke();
  //   ctx.fillStyle = `rgba(${randomColor}, ${randomColor}, ${randomColor}, ${randomDecimal})`;
  //   ctx.fill();
  // }

 



});
