import { GridItem } from "./GridItem.js";

export class EnemyItem extends GridItem {

  #stats = {
    hp: 0,
    atk: 0,
    def: 0,
  }

  type = 'enemy';

  constructor(sprite, visited){
    super(sprite, visited);

    // this.sprite = '🕷️';
  }

  gridAction(){
    const returnPackage = {
      type: this.type,
      message: 'You fight a spider 🕷️ ! You squash it, but not before it takes 1 hp.',
      hp: -1
    }

    return returnPackage;    
  }
}