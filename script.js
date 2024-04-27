
//Establishing canvas
let canvas;
let ctx;

//increments
let incrementor=0
let decrementor=100;
let sun=450


let cloud1=decrementor + 100
let cloud2=decrementor + 200
let cloud3=decrementor + 300
let cloud4=decrementor + 400

//Establishing 
window.onload = function () {
  canvas = document.getElementById("creativeCoding");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  ctx = canvas.getContext("2d");
  setInterval(drawBoxxy, 50);
};

/*  Fallback code*/
function drawBoxxy() {




//sky blue
ctx.fillStyle= 'rgb(135, 206, 235)' ;
ctx.fillRect(0, 0, window.innerWidth, window.innerHeight)




//white clouds
ctx.fillStyle= 'rgb(255, 255, 255)' ;
ctx.fillRect(cloud2++, 200, 175, 50)
ctx.fillRect(cloud1++, 100, 175, 50)
ctx.fillRect(cloud4++, 400, 175, 50)
ctx.fillRect(cloud3++, 300, 175, 50)
ctx.fillRect(incrementor++, 500, 175, 50)



//Yellow square

ctx.fillStyle= 'rgb(255, 255, 143)' ;

ctx.fillRect(500, decrementor--, 100, 100)


//Yellow sun
ctx.beginPath();
ctx.arc(150, sun--, 100, 0, 2 * Math.PI, false) ;
ctx.fillStyle = 'yellow' ;
ctx.fill ();
ctx.lineWidth = 5
ctx.strokeStyle = 'rgb(255, 234, 0)' ;
ctx.stroke ();





}