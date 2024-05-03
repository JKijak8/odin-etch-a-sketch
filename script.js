createGrid(5);
function createGrid(height) {
  let container = document.querySelector("#etch-a-sketch-container");

  for (let i = 0; i < height; i++) {
    container.appendChild(createGridLine(height));
  }
}

function createGridLine(width) {
  let lineContainer = document.createElement("div");
  lineContainer.classList.add("grid-line");

  let div;

  for (let i = 0; i < width; i++) {
    div = document.createElement("div");
    div.classList.add("grid-element");
    lineContainer.appendChild(div);
  }
  return lineContainer;
}
