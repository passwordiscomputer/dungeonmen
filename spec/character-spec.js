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
});
