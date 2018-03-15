import './styles.css';
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Character} from './character';

$(document).ready(function() {
  let player1;
  let player2
  $(".character").click(function(){
    let race = $(this).text();
    player1 = new Character(race.toLowerCase());
    $("#skill").fadeIn();
    $("#skill span").text(race);
    $("#skill .sneak").attr("value", player1.sneak);
    $("#skill .strength").attr("value", player1.strength);
    $("#skill .charisma").attr("value", player1.charisma);
    $("#skill .magic").attr("value", player1.magic);
    $("#skill .archer").attr("value", player1.archer);
    $("#skill").fadeIn();

  });
$(".character1").click(function(){
  let race = $(this).text();
  player2 = new Character(race.toLowerCase());
  $("#skill").fadeIn();
  $("#skill1 .sneak").attr("value", player2.sneak);
  $("#skill1 .strength").attr("value", player2.strength);
  $("#skill1 .charisma").attr("value", player2.charisma);
  $("#skill1 .magic").attr("value", player2.magic);
  $("#skill1 .archer").attr("value", player2.archer);
  $("#skill1").fadeIn();
});
$("#submit2").click(function(){
  $("#battle").fadeIn();
  $(".health .player1").text(player1.health);
  $(".health .player2").text(player2.health);
  // set player1 stats
  player1.sneak = $("#skill .sneak").val();
  player1.strength = $("#skill .strength").val();
  player1.charisma = $("#skill .charisma").val();
  player1.magic = $("#skill .magic").val();
  player1.archer = $("#skill .archer").val();
  player1.sneak = $("#skill .sneak").val();
  // set player2 stat
  player2.sneak = $("#skill1 .sneak").val();
  player2.strength = $("#skill1 .strength").val();
  player2.charisma = $("#skill1 .charisma").val();
  player2.magic = $("#skill1 .magic").val();
  player2.archer = $("#skill1 .archer").val();
  player2.sneak = $("#skill1 .sneak").val();
  });
});
