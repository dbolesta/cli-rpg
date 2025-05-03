import { getRandomInt } from "./utils.js";

export class GridItem {

  sprites = ["🌲", "🌳", "🌴"];
  messages = ["Lots of brush.", "The forest is dense here.", "You hear animals of all kinds", "You almost tripped on a root.", "A vine tickles your ankle."];

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

  gridAction(){
    if (this.visited) {
      return "Look's familiar";
    } else {
      return this.messages[getRandomInt(this.messages.length)];
    }
  }

  setVisited(hasBeenVisited = true) {
    this.visited = hasBeenVisited;
  }
}