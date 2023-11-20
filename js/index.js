let insideContainer = document.querySelector("#inside-container");
let canvas = document.createElement("div");
canvas.className = "canvas";
insideContainer.append(canvas);
let canvasWidth = canvas.offsetWidth * 1.81;
let canvasHeight = canvas.offsetHeight * 1.81;
let canvasColor = "_0";
let eraser = "_15";
let isPencil = true;
const docStyle = document.body.style;

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
  currentPaintPalette();
  changeDrawColor();
  setCurrentColor();
  createTools();
  changeTool();
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
//Creates click and drag effect; Also allows eraser tool to work correctly//Works with Window listeners
function makePixels() {
  let clickedPixels = document.querySelectorAll("#pixels");
  clickedPixels.forEach((pixel) => {
    pixel.addEventListener("mousedown", () => {
      if (isPencil) {
        pixel.className = canvasColor;
        pixel.style.opacity = 1;
      } else if (!isPencil && isDrawing) {
        pixel.className = eraser;
        pixel.style.opacity = 0.3;
      }
    });
  });
  let allPixels = document.querySelectorAll("#pixels");
  allPixels.forEach((pixel) => {
    pixel.addEventListener("pointerover", function () {
      if (isDrawing && isPencil) {
        pixel.className = canvasColor;
        pixel.style.opacity = 1;
      } else if (!isPencil && isDrawing) {
        pixel.className = eraser;
        pixel.style.opacity = 0.3;
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
    canvas.append(palette);
  }
}

function changeDrawColor() {
  //Changes Drawing Color
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

function currentPaintPalette() {
  //Creates Paint Palette Top/Right
  const paletteImage = document.createElement("img");
  paletteImage.src = "../toolbar/square.png";
  let currPalette = document.createElement("div");
  currPalette.className = canvasColor;
  currPalette.setAttribute("id", "paletteImg");
  currPalette.appendChild(paletteImage);
  canvas.append(currPalette);
}

function setCurrentColor() {
  //Changes Palette Color
  let color = document.querySelector("#paletteImg");
  window.addEventListener("click", () => {
    color.className = canvasColor;
  });
}

function createTools() {
  let pencilDiv = document.createElement("div");
  let eraserDiv = document.createElement("div");
  let pencilImage = document.createElement("img");
  let eraserImage = document.createElement("img");

  pencilImage.src = "../toolbar/project_pencil_toolbar.png";
  pencilDiv.className = "pencilTool";
  pencilImage.setAttribute("id", "draw");
  pencilImage.setAttribute("draggable", false);

  eraserImage.src = "../toolbar/project_eraser.png";
  eraserDiv.className = "eraserTool";
  eraserImage.setAttribute("id", "erase");
  eraserImage.setAttribute("draggable", false);

  pencilDiv.appendChild(pencilImage);
  eraserDiv.appendChild(eraserImage);

  canvas.append(pencilDiv);
  canvas.append(eraserDiv);
}

function changeTool() {
  isPencil = true;
  let pencil = document.querySelector("#draw");
  let eraser = document.querySelector("#erase");

  pencil.addEventListener("click", (e) => {
    isPencil = true;
    canvasColor = "_0";
    // docStyle.cursor = `url(../toolbar/project_pencil_toolbar.png), default`;
  });

  eraser.addEventListener("click", (e) => {
    isPencil = false;
    canvasColor = eraser;
    // docStyle.cursor = `url(../toolbar/project_eraser.png), default`;
  });
}
