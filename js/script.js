const grid = document.querySelector("#container");
const inputRange = document.querySelector("#rangeInput");
const gridContainer = document.createElement("div");

let number = inputRange.value;



const powedNumber = Math.pow(number, 2);

const createRandomColor = () => {
    const color = Math.floor(Math.random() * 16777215).toString(16);
    return `#${color}`
}


const createGrid = () => {
  gridContainer.className = `grid grid-cols-[repeat(${number},1fr)] grid-rows-[repeat(${number},1fr)] w-full h-full`;

  for (var i = 0; i < powedNumber; i += 1) {
    const box = document.createElement("div");
    box.className = "box w-full h-full";
    gridContainer.appendChild(box);
  }
  grid.append(gridContainer);
};


const changeColor = (e) => { 
    e.target.style.backgroundColor = createRandomColor()
}


const updateGrid = (e) => {
  number = e.target.value;
  createGrid();
};

class Box {
  constructor() {
    const box = document.createElement("div");
    box.className = "box w-full h-full";

    this.box = box;
  }
}

inputRange.addEventListener("change", (e) => updateGrid(e));
gridContainer.addEventListener("mouseover", (e) => changeColor(e))

createGrid();
