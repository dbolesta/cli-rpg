import { getRandomInt } from "./utils.js";

export class GridItem {

  sprites = ["🌲", "🌳", "🌴"];

  constructor(sprite) {
    if (!sprite) {
      this.sprite = this.sprites[getRandomInt(this.sprites.length)];
    } else {
      this.sprite = sprite;
    }
  }

  getSprite() {
    return this.sprite;
  }
}