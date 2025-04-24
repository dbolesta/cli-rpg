import { GridItem } from "./GridItem.js";
import { Player } from "./Player.js";

class Grid {
  constructor(w, h) {
    this.w = w;
    this.h = h;
    this.grid = [];
    this.player = new Player("Cool Dude", {hp: 5, atk: 5, def: 6});

    for (let x = 0; x <= this.w; x++) {
      let thisRow = [];
      for(let y = 0; y <= this.h; y++) {
        thisRow.push(new GridItem());
      }
      this.grid.push(thisRow);
    }

    this.player.x = this.w;

    this.start();
  }

  start() {
    console.log(`Creating Grid ${this.w} x ${this.h}`);
    this.logGrid();
  }

  

  logGrid() {

    this.grid[this.player.getPosition().x][this.player.getPosition().y] = this.player;

    let gridText = '';
    for (let x = 0; x <= this.w; x++) {
      for(let y = 0; y <= this.h; y++) {
        gridText += this.grid[x][y].getSprite();
      }
      gridText += '\n';
    }

    console.log(this.player.getPosition());
    // this.grid[this.player.getPosition().x][this.player.getPosition().y] = this.player.sprite;

    console.log(this.grid);


    console.log(gridText);
  }


}
const grid = new Grid(5, 10);