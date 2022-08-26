let container = document.querySelector(".container");
let resetButton = document.querySelector("#reset");
let defaultButton = document.querySelector("#default");
let rainbowButton = document.querySelector("#rainbow");
let darkerButton = document.querySelector("#darker");

let containerHeight = 800;
let containerWidth = 800;

let mode = "default";

container.style.height = containerHeight + "px";
container.style.width = containerWidth + "px";

defaultButton.addEventListener("click", () => mode = "default");
rainbowButton.addEventListener("click", () => mode = "rainbow");
darkerButton.addEventListener("click", () => mode = "darker");

resetButton.addEventListener("click", () => {
  let gridSize = parseInt(prompt("Enter the new grid size (max 100)"));
  if (isNaN(gridSize) || gridSize > 100) {
    return;
  }
  clearGrid();
  createGrid(gridSize);
});

function clearGrid() {
  while (container.hasChildNodes()) {
    container.removeChild(container.firstChild);
  }
}

function drawCell(cell) {
  if (mode === "darker") {
    makeDarker(cell);
  } else if (mode == "rainbow") {
    setRandomColor(cell);
  } else {
    cell.style.backgroundColor = "black";
  }
}

function setRandomColor(cell) {
  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);

  cell.style.backgroundColor = `rgb(${red},${blue},${green})`
}

function makeDarker(cell) {
  let rgb = cell.style.backgroundColor;
  if (rgb.length === 0) {
    cell.style.backgroundColor = "rgb(240,240,240)";
    return
  }
  arr = rgb.substring(4, rgb.length - 1).split(",");
  let red = Math.floor(parseInt(arr[0]) - 25, 0);
  let green = Math.max(parseInt(arr[1]) - 25, 0);
  let blue = Math.max(parseInt(arr[2]) - 25, 0);
  cell.style.backgroundColor = `rgb(${red},${blue},${green})`
}

function createGrid(gridSize) {
  let cellHeight = containerHeight / gridSize;
  let cellWidth = containerWidth / gridSize;

  for (let i = 0; i < gridSize; ++i) {
    let row = document.createElement("div");
    row.classList.add("row");
    for (let j = 0; j < gridSize; ++j) {
      let cell = document.createElement("div");
      cell.classList.add("cell");

      cell.style.height = cellHeight + "px";
      cell.style.width = cellWidth + "px";

      cell.addEventListener("mouseover", () => drawCell(cell));
      row.appendChild(cell);
    }
    container.appendChild(row);
  }
}

createGrid(16);
