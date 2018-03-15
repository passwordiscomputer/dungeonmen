export class Battle {
  constructor(player, enemy) {
    this.player = player;
    this.enemy = enemy;
    this.playerWin = 0;
  }

  determineWinner() {
    let text = "";
    if(this.player.health <= 0) {
      this.playerWin = 1;
      text = "You lost, scum!.";
    } else if (this.enemy.health <= 0) {
      this.playerWin = 2;
      text = "You win, scum!";
    }
    return text;
  }

  changeTurn() {
    var status = this.turn;
    if (status === true) {
      this.turn = false;
    } else {
      this.turn = true;
    }
  }


  }
