import { getRandomInt } from "./utils.js";

export class GridItem {

  sprites = ["🌲", "🌳", "🌴"];

  constructor(sprite, visited = false) {
    if (!sprite) {
      this.sprite = this.sprites[getRandomInt(this.sprites.length)];
    } else {
      this.sprite = sprite;
    }
    this.visited = visited;
  }

  getSprite() {
    if (!this.visited){
      return this.sprite;
    } else {
      return "👣";
    }
  }

  setVisited(hasBeenVisited = true) {
    this.visited = hasBeenVisited;
  }
}