export class Player {

    #stats = {
        hp: 0,
        atk: 0,
        def: 0,
    }

    constructor(name, stats) {
        this.sprite = "🐵";
        this.name = name;
        this.x = 0;
        this.y = 0;
        this.#stats = stats;
    }

    getPosition() {
      return {x: this.x, y: this.y};
    }
    getSprite() {
      if (this.#stats.hp > 0){
        return this.sprite;
      } else {
        return "💀";
      }
    }

    updateHp(hp) {
      this.#stats.hp += hp;
    }

    getStats() {
      return this.#stats;
    }
}