import {Character} from './../src/character.js';

describe('Character', function() {
  it('should create a character of the specified race', function() {
    var character = new Character("orc")
    expect(character.race).toEqual("orc")
  });
  it('should assign base skills', function() {
    var character = new Character("orc")
    expect(character.strength).toEqual(5)
  });
  it('should not allow more than twentyfive skills points to be added', function() {
    var character = new Character("orc")
    expect(character.addSkill(10, 10, 10, 10, 10)).toEqual(false)
  });
  it('should add base skill points to character', function() {
    var character = new Character("orc")
    character.addSkill(5, 5, 5, 5, 5)
    expect(character.strength).toEqual(10)
  });
  it('sets an enemy', function() {
    var character = new Character("orc")
    var enemy = new Character ("goblin")
    character.setEnemy(enemy)
    expect(character.enemy.sneak).toEqual(5)
  });
  it('attacks an enemy and depletes their health', function() {
    var character = new Character("orc")
    var enemy = new Character ("goblin")
    character.setEnemy(enemy)
    character.bash(enemy)
    expect(enemy.health).toEqual(39)
  });
  it('switches turn after every attack', function() {
    var character = new Character("orc")
    var enemy = new Character ("goblin")
    character.setEnemy(enemy)
    character.bash()
    expect(character.turn).toEqual(false)
  });
  it('accounts for enemys attacks', function() {
    var character = new Character("orc")
    var enemy = new Character ("goblin")
    character.setEnemy(enemy)
    character.bash()
    character.bash()
    expect(character.health).toEqual(49)
  });
  it('smooches an enemy and depletes their health', function() {
    var character = new Character("succubus")
    var enemy = new Character ("goblin")
    character.setEnemy(enemy)
    character.smooch(enemy)
    expect(enemy.health).toEqual(30)
  });
  it('smooch is self inflicting', function() {
    var character = new Character("succubus")
    var enemy = new Character ("goblin")
    character.setEnemy(enemy)
    character.smooch(enemy)
    expect(character.health).toEqual(40)
  });
  it('Cash return an enemy and deplete their health', function() {
    var character = new Character("goblin")
    var enemy = new Character ("succubus")
    character.setEnemy(enemy)
    character.cashReturn(enemy)
    expect(enemy.health).toEqual(35)
  });
  it('Magic arrow an enemy and deplete their health', function() {
    var character = new Character("human")
    var enemy = new Character ("succubus")
    character.setEnemy(enemy)
    character.magicArrow(enemy)
    expect(enemy.health).toEqual(40)
  });
});
