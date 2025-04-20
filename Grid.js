import { GridItem } from "./GridItem.js";

class Grid {
  constructor(w, h) {
    this.w = w;
    this.h = h;
    this.grid = [];

    this.start();
  }

  start() {
    console.log(`Creating Grid ${this.w} x ${this.h}`);
    this.createGrid();
    this.logGrid();
  }

  createGrid() {
    let gridRow = [];
    for (let x = 0; x <= this.w; x++) {
      for(let y = 0; y <= this.h; y++) {
        gridRow.push(new GridItem());
      }
      this.grid.push(gridRow);
      gridRow = [];
    }
  }

  logGrid() {
    let gridText = '';
    for (let x = 0; x <= this.w; x++) {
      for(let y = 0; y <= this.h; y++) {
        gridText += this.grid[x][y].getSprite();
      }
      gridText += '\n';
    }
    console.log(gridText);
  }


}
const grid = new Grid(10, 20);