let insideContainer = document.querySelector("#inside-container");
let canvas = document.createElement("div");
canvas.className = "canvas";
insideContainer.append(canvas);
let canvasWidth = canvas.offsetWidth * 1.81;
let canvasHeight = canvas.offsetHeight * 1.81;
let pixelGrid;
render();

function render() {
  makeGridLines();
}
function makeGridLines() {
  for (let i = 0; i < canvasWidth - 131; i++) {
    pixelGrid = document.createElement("div");
    pixelGrid.className = "pixels";

    for (let j = 0; j < canvasHeight; j++) {
      canvas.append(pixelGrid);
    }
  }
}

// let drawPixels = document.querySelectorAll(".pixels");
// let drawPixels = document.querySelectorAll(".pixels");

drawPixels.addEventListener("click", (e) => {
  pixelGrid.style.backgroundColor = "black";
});
