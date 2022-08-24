let container = document.querySelector(".container");

let gridSize = 16;

for (let i = 0; i < gridSize; ++i) {
  let row = document.createElement("div");
  row.classList.add("row");
  for (let j = 0; j < gridSize; ++j) {
    let cell = document.createElement("div");
    cell.classList.add("cell");
    row.appendChild(cell);
  }
  container.appendChild(row);
}
