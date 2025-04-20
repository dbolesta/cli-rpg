import { GridItem } from "./GridItem.js";

class Grid {
  constructor(w, h) {
    this.w = w;
    this.h = h;

    this.start();
  }

  start() {
    console.log(`Creating Grid ${this.w} x ${this.h}`);
    let spaceOne = new GridItem();
    let spaceTwo = new GridItem();
    let spaceThree = new  GridItem();

    console.log(spaceOne.getSprite(), spaceTwo.getSprite(), spaceThree.getSprite());
  }
}
const grid = new Grid(10, 10);