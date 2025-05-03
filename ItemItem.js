import { GridItem } from "./GridItem.js";

export class ItemItem extends GridItem {

  #stats = {
    hp: 0,
    atk: 0,
    def: 0,
  }

  type = 'item';

  constructor(sprite, visited){
    super(sprite, visited);

    this.sprite = '🪖';
  }

  gridAction(){
    const returnPackage = {
      type: this.type,
      message: 'You found a sheild! Your hp has increased.',
      hp: 1
    }

    return returnPackage;    
  }
}