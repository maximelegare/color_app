const grid = document.querySelector("#grid-container");
const inputRange = document.querySelector("#rangeInput");
const gridContainer = document.createElement("div");
const inputColor = document.querySelector("#inputColor");
const colorsList = document.querySelector("#colorsList");
const gridDimensions = document.querySelector("#gridDimensions")
const resetBtn = document.querySelector("#resetBtn");

let number = 16;
inputRange.value = number;

let squaredNumber = Math.pow(number, 2);

let colors = [];
resetBtn.setAttribute("disabled", "disabled");


class Box {
  constructor() {
    this.element = this.createBox();
  }

  createBox() {
    const box = document.createElement("div");
    box.className = "box w-full h-full border-[1px] border-solid border-black bg-white";
    return box;
  }
}

const createRandomColor = () => {
  const color = Math.floor(Math.random() * 16777215).toString(16);
  return `#${color}`;
};


const selectRandomColorFromColors = () => {
  const index = Math.floor(Math.random() * colors.length);
  return colors[index];
};


const createGrid = () => {
  gridContainer.className = `grid grid-cols-[repeat(${number},1fr)] grid-rows-[repeat(${number},1fr)] w-full h-full`;

  for (var i = 0; i < squaredNumber; i += 1) {
    const box = new Box();

    gridContainer.appendChild(box.element);
  }
  grid.append(gridContainer);
  gridDimensions.innerHTML = `${number} x ${number}`
};


const createColorsList = () => {
  const ul = document.createElement("ul");
  ul.className = "flex h-full w-full items-center px-2 gap-2"
  colors.forEach((color) => {
    const li = document.createElement("li");
    li.classList = `w-12 h-12 rounded-md bg-[${color}]`;
    ul.appendChild(li);
  });

  colorsList.appendChild(ul);
  resetBtn.removeAttribute("disabled")
};


const changeColor = (e) => {
  if (colors.length === 0) {
    e.target.style.backgroundColor = createRandomColor();
  } else {
    e.target.style.backgroundColor = selectRandomColorFromColors();
  }
};

const addColorToList = (e) => {
  colors.push(e.target.value);
  colorsList.innerHTML = "";
  createColorsList();
};

const updateGrid = (e) => {
  number = e.target.value;
  squaredNumber = Math.pow(number, 2);

  gridContainer.innerHTML = "";
  createGrid();
};

const resetPallet = () => {
    console.log("resetPallet")
    colors = []
    colorsList.innerHTML = ""   
    resetBtn.setAttribute("disabled", "disabled");
}


inputRange.addEventListener("change", (e) => updateGrid(e));
gridContainer.addEventListener("mouseover", (e) => changeColor(e));
inputColor.addEventListener("change", (e) => addColorToList(e));

createGrid();
