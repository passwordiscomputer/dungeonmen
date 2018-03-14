export class Character {
  constructor(race) {
    this.race = race;
    this.inventory = [];
    this.health = 50;
    this.level = 1;
    this.experience = 0;
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
}
