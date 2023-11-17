let insideContainer = document.querySelector("#inside-container");
let canvas = document.createElement("div");

insideContainer.append(canvas);
canvas.className = "canvas";
let canvasWidth = canvas.offsetWidth * 1.81;
let canvasHeight = canvas.offsetHeight * 1.81;

function makeGridLines() {
  
  for (let i = 0; i < canvasWidth + 12; i++) {
    let pixelGrid = document.createElement("div");
    pixelGrid.className = "pixels";

    for (let j = 0; j < canvasHeight; j++) {
      canvas.append(pixelGrid);
    }
  }
}

makeGridLines();
