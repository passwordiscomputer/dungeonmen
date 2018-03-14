//import { tbd } from './sample-project';
import './styles.css';
import $ from 'jquery';
// import 'boostrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Character} from './character';

$(document).ready(function() {
  let character;
  $(".character").click(function(){
    let race = $(this).text();
    character = new Character(race.toLowerCase());
    console.log(character.race);
    $("#skill").fadeIn();
    $("#skill span").text(race);
    $("#sneak").attr("value", character.sneak);
    $("#strength").attr("value", character.strength);
    $("#charisma").attr("value", character.charisma);
    $("#magic").attr("value", character.magic);
    $("#archer").attr("value", character.archer);
    $("#skill").fadeIn();

  });
  

});
