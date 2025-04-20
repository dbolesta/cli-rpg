import { getRandomInt } from "./utils.js";

export class GridItem {

  sprites = ["🌲", "🌳", "🌴"];

  constructor(sprite) {
    this.sprite = this.sprites[getRandomInt(this.sprites.length)];
  }

  getSprite() {
    return this.sprite;
  }
}