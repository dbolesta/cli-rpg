import { GridItem } from "./GridItem.js";

export class ItemItem extends GridItem {

  #stats = {
    hp: 0,
    atk: 0,
    def: 0,
}

  constructor(sprite, visited){
    super(sprite, visited);

    this.sprite = '🎁';
  }
}