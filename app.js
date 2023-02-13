var canvas = document.getElementById("myCanvas");
const context = canvas.getContext("2d");
let position = { x: 0, y: 0 };
document.addEventListener("mousedown", start);
document.addEventListener("mouseup", stop);


function reposition(e) {
  position.x = e.clientX - canvas.offsetLeft;
  position.y = e.clientY - canvas.offsetTop;
}
function start(e) {
  document.addEventListener("mousemove", draw);
  reposition(e);
}
function stop() {
  document.removeEventListener("mousemove", draw);
}
function draw(e) {
  context.beginPath();
  context.lineWidth = 3;
  context.strokeStyle = document.getElementById('pickColor').value;
  context.moveTo(position.x, position.y);
  reposition(e);
  context.lineTo(position.x, position.y);
  context.stroke();
}

function clear(){
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.restore();
}