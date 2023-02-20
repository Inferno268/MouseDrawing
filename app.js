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
var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
}

function draw(e) {
  let color = document.getElementById('pickColor').value;
  let opacity = document.getElementById('pickOpacity').value;
  context.beginPath();
  context.lineWidth = 3;
  context.strokeStyle = color;
  context.moveTo(position.x, position.y);
  reposition(e);
  context.lineTo(position.x, position.y);
  context.stroke();
}

document.getElementById('clear').addEventListener('click', function() {
  context.clearRect(0, 0, canvas.width, canvas.height);
});
