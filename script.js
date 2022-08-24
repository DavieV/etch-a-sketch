let container = document.querySelector(".container");
let resetButton = document.querySelector("#reset");

resetButton.addEventListener("click", () => {
  let gridSize = parseInt(prompt("Enter the new grid size"));
  if (isNaN(gridSize)) {
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

function createGrid(gridSize) {
  console.log(gridSize);
  for (let i = 0; i < gridSize; ++i) {
    let row = document.createElement("div");
    row.classList.add("row");
    for (let j = 0; j < gridSize; ++j) {
      let cell = document.createElement("div");
      cell.classList.add("cell");
      cell.addEventListener("mouseover", () => cell.classList.add("black"));
      row.appendChild(cell);
    }
    container.appendChild(row);
  }
}

createGrid(16);
