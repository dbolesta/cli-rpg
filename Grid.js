import { GridItem } from "./GridItem.js";
import { Player } from "./Player.js";
import { promptPlayerForDirection } from "./playerPrompts.js";

class Grid {
  constructor(w, h) {
    this.w = w;
    this.h = h;
    this.grid = [];
    this.player = new Player("Cool Dude", {hp: 5, atk: 5, def: 6});

    // construct initial grid
    for (let x = 0; x <= this.w; x++) {
      let thisRow = [];
      for(let y = 0; y <= this.h; y++) {
        thisRow.push(new GridItem());
      }
      this.grid.push(thisRow);
    }

    // set player to bottom left
    this.player.x = this.w;

    this.start();
  }

  async start() {
    console.clear();
    console.log("You enter the forest in search of the star!");

    // main loop start
    while(this.player.getStats().hp > 0){
      
      this.logGrid();
      const response = await promptPlayerForDirection();
      console.clear();
      this.performAction(response);

      console.log(response);
    }
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

    console.log(gridText);

  }

  performAction(move) {
    switch (move) {
      case "Up":
        if (this.player.x > 0) {
          this.grid[this.player.x][this.player.y] = new GridItem(null, true);
          this.player.x--;
        } else {
          console.log("You can't go that way.");
        }
        break;
      case "Down":
        if (this.player.x < this.w) {
          this.grid[this.player.x][this.player.y] = new GridItem(null, true);
          this.player.x++;
        } else {
          console.log("You can't go that way.");
        }
        break;
      case "Left":
        if (this.player.y > 0) {
          this.grid[this.player.x][this.player.y] = new GridItem(null, true);
          this.player.y--;
        } else {
          console.log("You can't go that way.");
        }
        break;
      case "Right":
        if (this.player.y < this.h) {
          this.grid[this.player.x][this.player.y] = new GridItem(null, true);
          this.player.y++;
        } else {
          console.log("You can't go that way.");
        }
        break;
    }
  }


}
const grid = new Grid(5, 10);