import { GridItem } from "./GridItem.js";

class Grid {
  constructor(w, h) {
    this.w = w;
    this.h = h;

    this.start();
  }

  start() {
    console.log(`Creating Grid ${this.w} x ${this.h}`);
    this.renderGrid();
  }

  renderGrid() {
    let gridText = '';
    for (let x = 0; x <= this.w; x++) {
      for(let y = 0; y <= this.h; y++) {
        gridText += new GridItem().getSprite();
      }
      gridText += '\n';
    }
    console.log(gridText);
  }


}
const grid = new Grid(10, 20);