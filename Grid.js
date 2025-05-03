import { GridItem } from "./GridItem.js";
import { ItemItem } from "./ItemItem.js";
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
        let item = this.chooseItem();
        // thisRow.push(new GridItem());
        thisRow.push(item);
      }
      this.grid.push(thisRow);
    }

    // set player to bottom left
    this.player.x = this.w;

    

    this.start();
  }

  chooseItem() {
    let randNum = Math.random();
    if (randNum < 0.2) {
      return new ItemItem();
    } else {
      return new GridItem()
    }
  }

  async start() {
    console.clear();
    console.log("You enter the forest in search of the star!");

    try {
      // main loop start
      while(this.player.getStats().hp > 0){
        this.logGrid();
        const response = await promptPlayerForDirection();
        console.clear();
        this.performAction(response);
        console.log(response);
      }
    } catch (err) {
      if (err.name === "ExitPromptError") {
        console.log("\nGame exited by user.");
        process.exit(0);
      } else {
        throw err; // rethrow other errors
      }
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

    let directions = {
      "Up": {dx: -1, dy: 0},
      "Down": {dx: 1, dy: 0},
      "Left": {dx: 0, dy: -1},
      "Right": {dx: 0, dy: 1},
    }

    const { dx, dy } = directions[move];
    let newX = this.player.x + dx;
    let newY = this.player.y + dy;

    if (newX < 0 || newX > this.w || newY < 0 || newY > this.h) {
      console.log("You can't go that way.");
      return;
    }

    this.grid[this.player.x][this.player.y] = new GridItem(null, true);

    this.player.x = newX;
    this.player.y = newY;

    const response = this.grid[this.player.x][this.player.y].gridAction();

    console.log(response.message);

    if (response.type === 'item') {
      this.player.updateHp(response.hp);
      console.log(`Player hp is now ${this.player.getStats().hp}`);
    } else if ()

    


  }


}
const grid = new Grid(5, 10);