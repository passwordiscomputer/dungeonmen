export class Character {
  constructor(race) {
    this.race = race;
    this.inventory = [];
    this.health = 50;
    this.level = 1;
    this.experience = 0;
    this.turn = true;
    if (this.race == "goblin") {
      this.sneak = 5;
      this.strength = 0;
      this.charisma = 0;
      this.magic = 0;
      this.archer = 0;
    }else if (this.race == "orc") {
      this.sneak = 0;
      this.strength = 5;
      this.charisma = 0;
      this.magic = 0;
      this.archer = 0;
    }else if (this.race == "human") {
      this.sneak = 0;
      this.strength = 0;
      this.charisma = 0;
      this.magic = 2;
      this.archer = 3;
    }else if (this.race == "succubus") {
      this.sneak = 0;
      this.strength = 0;
      this.charisma = 5;
      this.magic = 0;
      this.archer = 0;
    }
  }
  addSkill(sneak, strength, charisma, magic, archer){
    if(sneak + strength + charisma + magic + archer > 25 ){
      return false;
    }
    this.sneak += sneak;
    this.strength += strength;
    this.charisma += charisma;
    this.magic += magic;
    this.archer += archer;
  }
  addExperience(points){
    this.experience += points;
  }
  levelup(){
    if (this.experience >= (100 + (10 * this.level))) {
      this.level += 1;
      this.experience -= (100 + (10 * this.level));
      return true;
    }
    return false;
  }

  bash(){
    if (this.turn == true){
      let attackValue = 1 + (2 * this.strength);
      this.enemy.health = this.enemy.health - attackValue;
      this.turn = false;
    } else {
      let attackValue = 1 + (2 * this.enemy.strength);
      this.health = this.health - attackValue;
      this.turn = true;
    }
  }

  smooch(){
    if (this.turn == true){
      let attackValue = 0 + (4 * this.charisma);
      this.enemy.health = this.enemy.health - attackValue;
      this.health = this.health - attackValue/2
      this.turn = false;
    } else {
      let attackValue = 1 + (4 * this.charisma);
      this.enemy.health = this.enemy.health - attackValue;
      this.health = this.health - attackValue/2
      this.turn = true;
    }
  }

  cashReturn(){
    if (this.turn == true){
      let attackValue = 0 + (3 * this.sneak);
      this.enemy.health = this.enemy.health - attackValue;
      this.turn = false;
    } else {
      let attackValue = 0 + (3 * this.sneak);
      this.enemy.health = this.enemy.health - attackValue;
      this.turn = true;
    }
  }

  magicArrow(){
    if (this.turn == true){
      let attackValue = 0 + (2 * (this.magic + this.archer));
      this.enemy.health = this.enemy.health - attackValue;
      this.turn = false;
    } else {
      let attackValue = 0 + (2 * this.magic + this.archer);
      this.enemy.health = this.enemy.health - attackValue;
      this.turn = true;
    }
  }

  setEnemy(enemy){
    this.enemy = enemy;
  }


}
