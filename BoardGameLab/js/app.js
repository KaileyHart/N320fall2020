class X {
  constructor(x) {
    this.x = x;
  }
}

class O {
  constructor(o) {
    this.o = o;
  }
}

class Player {
  constructor(currentPlayer) {
    this.currentPlayer = currentPlayer;
  }
  turn() {}
}

//will extend players based on turn?
class BoardGame {
  constructor(win, lose, turn, playerOneScore, playerTwoScore, restart) {
    this.win = win;
    this.lose = lose;
    this.turn = turn;
    this.playerOneScore;
    this.playerTwoScore;
    this.restart = restart;
  }
}

function o() {
  console.log("clicked");
}

let x = document.getElementById("x");
let oTest = document.getElementById("o-test");

function clickFunction() {
  if (oTest.style.display === "block") {
    oTest.style.display = "none";
  } else if (oTest.style.display === "none") {
    oTest.style.display = "block";
  }
}
