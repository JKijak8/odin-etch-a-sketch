let currentSize = 16;

createGrid(currentSize);

const container = document.querySelector("#etch-a-sketch-container");

container.addEventListener("mouseover", (event) => {
  const target = event.target;

  if (target.classList.contains("grid-element")) {
    changeColor(target);
  }
});

const buttons = document.querySelector("#buttons");

buttons.addEventListener("click", (event) => {
  const target = event.target;

  switch (target.id) {
    case "resize":
      currentSize = Number(
        prompt("Please enter new etch-a-sketch size.", "16"),
      );
      deleteGrid();
      createGrid(currentSize);
      break;

    case "reset":
      deleteGrid();
      createGrid(currentSize);
      break;
  }
});

function createGrid(height) {
  const container = document.querySelector("#etch-a-sketch-container");

  for (let i = 0; i < height; i++) {
    container.appendChild(createGridLine(height));
  }
}

function createGridLine(width) {
  const lineContainer = document.createElement("div");
  lineContainer.classList.add("grid-line");

  let div;

  for (let i = 0; i < width; i++) {
    div = document.createElement("div");
    div.classList.add("grid-element");
    lineContainer.appendChild(div);
  }
  return lineContainer;
}

function changeColor(target) {
  if (target.classList.contains("colored")) {
    let opacity = Number(target.style.opacity);
    opacity -= 0.1;
    target.style.opacity = `${opacity}`;
  } else {
    const COLOR = randomColor();
    target.style.backgroundColor = `rgb(${COLOR[0]}, ${COLOR[1]}, ${COLOR[2]})`;
    target.style.opacity = "1.0";
    target.classList.add("colored");
  }
}

function randomColor() {
  let color = [];

  for (let i = 0; i < 3; i++) {
    color[i] = getRandomRGB();
  }

  return color;
}

function getRandomRGB() {
  return Math.random() * 256;
}

function deleteGrid() {
  const gridLines = document.querySelectorAll(".grid-line");

  gridLines.forEach((item) => {
    item.remove();
  });
}
