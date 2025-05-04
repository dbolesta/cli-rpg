import { GridItem } from "./GridItem.js";

export class StarItem extends GridItem {

  #stats = {
    hp: 0,
    atk: 0,
    def: 0,
  }

  type = 'star';

  constructor(sprite, visited){
    super(visited);

    this.sprite = "⭐️";
  }

  gridAction(){
    const returnPackage = {
      type: this.type,
      message: 'You got the star ⭐️ ! Win!',
      hp: null
    }

    return returnPackage;    
  }
}