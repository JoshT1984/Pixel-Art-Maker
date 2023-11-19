let insideContainer = document.querySelector("#inside-container");
let canvas = document.createElement("div");
canvas.className = "canvas";
insideContainer.append(canvas);
let canvasWidth = canvas.offsetWidth * 1.81;
let canvasHeight = canvas.offsetHeight * 1.81;
let canvasColor = "_0";

let isDrawing = false;
window.addEventListener("pointerdown", () => {
  isDrawing = true;
});
window.addEventListener("pointerup", () => {
  isDrawing = false;
});

render();

function render() {
  makeGridLines();
  makePixels();
  makeSquarePaintPalette();
  changeDrawColor();
}
function makeGridLines() {
  let pixelGrid;

  for (let i = 0; i < canvasWidth - 131; i++) {
    pixelGrid = document.createElement("div");
    pixelGrid.setAttribute("id", "pixels");

    for (let j = 0; j < canvasHeight; j++) {
      canvas.append(pixelGrid);
    }
  }
}

function makePixels() {
  let clickedPixels = document.querySelectorAll("#pixels");
  clickedPixels.forEach((pixel) => {
    pixel.addEventListener("mousedown", () => {
      pixel.className = canvasColor;
      pixel.style.opacity = 1;
    });
  });
  let allPixels = document.querySelectorAll("#pixels");
  allPixels.forEach((pixel) => {
    pixel.addEventListener("pointerover", function () {
      if (isDrawing) {
        pixel.className = canvasColor;
        pixel.style.opacity = 1;
      }
    });
  });
}

function makeSquarePaintPalette() {
  let palette;
  let colorArray = [
    "black",
    "red",
    "rgb(255,69,0)",
    "orange",
    "rgb(255,170,51)",
    "yellow",
    "rgb(154,205,50)",
    "green",
    "rgb(8,143,143)",
    "blue",
    "rgb(57,100,195)",
    "indigo",
    "rgb(27,10,64)",
    "violet",
    "rgb(203,195,227)",
  ];
  for (let i = 0; i < canvasWidth / 97; i++) {
    palette = document.createElement("div");
    palette.classList.add("addSquares");
    palette.classList.add(`_${i}`);
    palette.style.backgroundColor = colorArray[i];
    canvas.append(palette);
  }
}

function changeDrawColor() {
  let returnElement;
  let colorSquares = document.querySelectorAll(".addSquares");
  colorSquares.forEach((color) => {
    color.addEventListener("click", (e) => {
      if (null) {
        return;
      }
      canvasColor = e.target.classList[1];
    });
  });
}
