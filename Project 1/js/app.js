console.log("hey");
//https://www.youtube.com/watch?v=Cl_w9RGTIC4
//https://www.youtube.com/watch?v=smyegjAjMx8

//Initialize the player turn variable
let turn = (document.getElementById("player").innerHTML = "Player One");
turn = "Player One";

//Player Class
class Player {
  constructor(id, x, y, size, color) {
    this.id = id;
    this.x = x;
    this.y = y;
    this.size = size;
    this.color = `#` + Math.floor(Math.random() * 16777215).toString(16);
  }

  ////Creates a new ellipse element
  update() {
    const newPlayer = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "ellipse"
    );

    newPlayer.setAttribute("cx", this.x);
    newPlayer.setAttribute("cy", this.y);
    newPlayer.setAttribute("rx", this.size);
    newPlayer.setAttribute("ry", this.size);
    newPlayer.setAttribute("style", `fill: ` + this.color);

    const players = document.querySelector("#players");
    players.appendChild(newPlayer);
    console.log(newPlayer);
  }
}

//Create new Player Object
const playerOne = new Player(0, 67, 550, 15, this.color);
playerOne.update();
//console.log(playerOne);

//Create new Player Object
const playerTwo = new Player(1, 25, 550, 15, this.color);
playerTwo.update();
//console.log(playerTwo);

//Interactions Class
class Interactions {
  constructor() {
    this.list = [];
  }
}

//Chutes Class
class Chutes {
  constructor(style, d, transform) {
    this.style = style;
    this.d = d;
    this.transform = transform;
  }

  //Creates a new path element
  update() {
    const newChutes = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "path"
    );

    newChutes.setAttribute("class", this.style);
    newChutes.setAttribute("d", this.d);
    newChutes.setAttribute("transform", this.transform);

    const chutes = document.querySelector("#chutes");
    chutes.appendChild(newChutes);
    // console.log(newChutes);
  }
}

//ChutesDetail Class
class ChutesDetail extends Chutes {
  constructor(style, d, transform, color) {
    super(style, d, transform);
    this.color = color;
  }

  //Creates a new path element
  update() {
    const newChutesDetail = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "path"
    );

    newChutesDetail.setAttribute("class", this.style);
    newChutesDetail.setAttribute("d", this.d);
    newChutesDetail.setAttribute("transform", this.transform);

    const chutesDetail = document.querySelector("#chutes");
    chutesDetail.appendChild(newChutesDetail);
    //console.log(newChutesDetail);
  }
}

//Create new Chutes Object 1
const chutesOne = new Chutes(
  "cls-1",
  "M245.28,385c11,8.52,21.29,19.18,26.46,39.43,3,11.59.27,14.58,1.08,37.27,1,26.72,7,40.62,16.75,58.34C302.4,543.44,329,557.31,329,557.31a442.41,442.41,0,0,1-61.58,4.86c-30-25.31-37.35-50-40-66.44-4.46-27.93,7.87-46.11-2.16-72.92-7-18.63-20.74-30.71-30.79-37.81Z",
  "translate(-60.35 -30.46)"
);
chutesOne.update();
//console.log(chutesOne);

//Create chutes lines on the side of Chute One
const chutesOneDetailOne = new ChutesDetail(
  "cls-2",
  "M208.81,390.13c7.11,7.73,23.4,28.74,26.84,44.26,5,22.72-5.68,34.9-5,53.59.5,14.65,12.87,46.69,45.18,71.22",
  "translate(-60.35 -30.46)",
  "1ca68f"
);
chutesOneDetailOne.update();

const chutesOneDetailTwo = new ChutesDetail(
  "cls-2",
  "M244.1,384.14c7.11,7.72,19.61,29.9,23,45.42,5,22.72-1.88,33.74-1.25,52.42.5,14.66,12.87,46.69,45.18,71.23",
  "translate(-60.35 -28)",
  "1ca68f"
);
chutesOneDetailTwo.update();

//Create new Chutes Object 2
const chutesTwo = new Chutes(
  "cls-1",
  "M508,183a180.33,180.33,0,0,0-20.35,8.83c-14.9,7.58-49.37,20.43-70.65,62.17-20.83,40.86-27,64-49,96-13.78,20-38.59,35.22-105,39H183l-2-56s103.13,7.7,141-11c27.47-13.57,40.95-52.19,55-86,13.39-32.22,61-59,61-59Z",
  "translate(-15.96 -105.99)"
);
chutesTwo.update();
//console.log(chutesTwo);

//Create chutes lines on the side of Chute Two
const chutesTwoDetailOne = new ChutesDetail(
  "cls-2",
  "M450,180c-9.95,5.66-31.94,19.05-45,34-15.74,18-18.33,30.61-34,58-15.45,27-19.63,37.46-33,50-16,15-89.54,26.15-150,15",
  "translate(-15.96 -105.99)",
  "1ca68f"
);
chutesTwoDetailOne.update();

//Create chutes lines on the side of Chute Two
const chutesTwoDetailTwo = new ChutesDetail(
  "cls-2",
  "M492,184c-9.51,4.56-34.81,11.56-49,25-21.8,20.64-29,33-48,70-18.78,36.57-25,63-44,78-20.46,16.15-85.7,32.17-159,22",
  "translate(-15.96 -105.99)",
  "1ca68f"
);
chutesTwoDetailTwo.update();

//Ladders Class
class Ladders {
  constructor(width, height, x, y, style) {
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.style = style;
  }

  update() {
    const newLadder = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "rect"
    );

    newLadder.setAttribute("width", this.width);
    newLadder.setAttribute("height", this.height);
    newLadder.setAttribute("x", this.x);
    newLadder.setAttribute("y", this.y);
    newLadder.setAttribute("style", this.style);

    const ladder = document.querySelector("#ladders");
    ladder.appendChild(newLadder);
    console.log(newLadder);
  }
}

//Create new Ladders Object 1
const ladderOneLeft = new Ladders(
  "10",
  "240",
  "10",
  "30",
  "fill: #ffaa81; stroke-width: 2; stroke: rgb(0, 0, 0)"
);
ladderOneLeft.update();

//Create new Ladders Object 1
const ladderOneRight = new Ladders(
  "10",
  "240",
  "60",
  "30",
  "fill: #ffaa81; stroke-width: 2; stroke: rgb(0, 0, 0)"
);
ladderOneRight.update();

//Create new Ladder Rung Object 1
const ladderOneRungOne = new Ladders(
  "50",
  "10",
  "10",
  "55",
  "fill: #ffaa81; stroke-width: 1; stroke: rgb(0, 0, 0)"
);
ladderOneRungOne.update();

//Create new Ladder Rung Object 1
const ladderOneRungTwo = new Ladders(
  "50",
  "10",
  "10",
  "100",
  "fill: #ffaa81; stroke-width: 1; stroke: rgb(0, 0, 0)"
);
ladderOneRungTwo.update();

//Create new Ladder Rung Object 1
const ladderOneRungThree = new Ladders(
  "50",
  "10",
  "10",
  "150",
  "fill: #ffaa81; stroke-width: 1; stroke: rgb(0, 0, 0)"
);
ladderOneRungThree.update();

//Create new Ladder Rung Object 1
const ladderOneRungFour = new Ladders(
  "50",
  "10",
  "10",
  "200",
  "fill: #ffaa81; stroke-width: 1; stroke: rgb(0, 0, 0)"
);
ladderOneRungFour.update();

//Create new Ladder Rung Object 1
const ladderOneRungFive = new Ladders(
  "50",
  "10",
  "10",
  "240",
  "fill: #ffaa81; stroke-width: 1; stroke: rgb(0, 0, 0)"
);
ladderOneRungFive.update();

//Create new Ladders Object 2
const ladderTwoLeft = new Ladders(
  "10",
  "360",
  "410",
  "210",
  "fill: #ffaa81; stroke-width: 2; stroke: rgb(0, 0, 0)"
);
ladderTwoLeft.update();

//Create new Ladders Object 2
const ladderTwoRight = new Ladders(
  "10",
  "360",
  "460",
  "210",
  "fill: #ffaa81; stroke-width: 2; stroke: rgb(0, 0, 0)"
);
ladderTwoRight.update();

//Create new Ladder Rung Object 2
const ladderTwoRungOne = new Ladders(
  "50",
  "10",
  "410",
  "255",
  "fill: #ffaa81; stroke-width: 1; stroke: rgb(0, 0, 0)"
);
ladderTwoRungOne.update();

//Create new Ladder Rung Object 2
const ladderTwoRungTwo = new Ladders(
  "50",
  "10",
  "410",
  "300",
  "fill: #ffaa81; stroke-width: 1; stroke: rgb(0, 0, 0)"
);
ladderTwoRungTwo.update();

//Create new Ladder Rung Object 2
const ladderTwoRungThree = new Ladders(
  "50",
  "10",
  "410",
  "350",
  "fill: #ffaa81; stroke-width: 1; stroke: rgb(0, 0, 0)"
);
ladderTwoRungThree.update();

//Create new Ladder Rung Object 2
const ladderTwoRungFour = new Ladders(
  "50",
  "10",
  "410",
  "350",
  "fill: #ffaa81; stroke-width: 1; stroke: rgb(0, 0, 0)"
);
ladderTwoRungFour.update();

//Create new Ladder Rung Object 2
const ladderTwoRungFive = new Ladders(
  "50",
  "10",
  "410",
  "400",
  "fill: #ffaa81; stroke-width: 1; stroke: rgb(0, 0, 0)"
);
ladderTwoRungFive.update();

//Create new Ladder Rung Object 2
const ladderTwoRungSix = new Ladders(
  "50",
  "10",
  "410",
  "440",
  "fill: #ffaa81; stroke-width: 1; stroke: rgb(0, 0, 0)"
);
ladderTwoRungSix.update();

//Create new Ladder Rung Object 2
const ladderTwoRungSeven = new Ladders(
  "50",
  "10",
  "410",
  "500",
  "fill: #ffaa81; stroke-width: 1; stroke: rgb(0, 0, 0)"
);
ladderTwoRungSeven.update();

//Create new Ladder Rung Object 2
const ladderTwoRungEight = new Ladders(
  "50",
  "10",
  "410",
  "540",
  "fill: #ffaa81; stroke-width: 1; stroke: rgb(0, 0, 0)"
);
ladderTwoRungEight.update();

//Controls the output when a user clicks "Roll Dice" button
function rollDice() {
  //Creates an array of the players
  const players = [playerOne, playerTwo];
  console.log(players);

  //Randomly chooses a number from 1-6 and rounds it to the nearest 10th
  const rollDice = Math.round(Math.random() * 6).toString();

  //Toggles between Player One and Player Two based on who has rolled
  if (turn === "Player One") {
    //current player = the player id
    let currentPlayerTurn = players[1].id;
    console.log(currentPlayerTurn);
    let currentPlayer = players[currentPlayerTurn];

    //Changes the interface
    document.getElementById("player").innerHTML = "Player Two";
    turn = "Player Two";

    console.log(currentPlayer);

    //Only adds to the x position if the position is not more than the board length
    if (currentPlayer.x >= 20 && currentPlayer.x <= 550) {
      //Updates the currentPlayer position
      position = Number(currentPlayer.x) + Number(rollDice) * 100;
      gsap.to(currentPlayer, { x: position, duration: 5 });
      //Updates the player instances
      playerTwo.update();
    }

    if (currentPlayer.x >= 600 && currentPlayer.y >= 500) {
      position = Number(currentPlayer.y) - 100;
      gsap.to(currentPlayer, { y: position, duration: 5 });
      playerTwo.update();
      //move position.y up by subtracting 100 to y
      //subtract position.x by Number(rollDice) * 100;
      console.log("move up");
    } else {
      console.log("umm");
    }

    //console.log(turn);
  } else if (turn === "Player Two") {
    //current player = the player id
    let currentPlayerTurn = players[0].id;
    console.log(currentPlayerTurn);
    let currentPlayer = players[currentPlayerTurn];

    //Changes the interface
    document.getElementById("player").innerHTML = "Player One";
    turn = "Player One";

    //Only adds to the x position if the position is not more than the board length
    if (currentPlayer.x >= 20 && currentPlayer.x <= 550) {
      //Updates the currentPlayer position
      position = Number(currentPlayer.x) + Number(rollDice) * 100;
      gsap.to(currentPlayer, { x: position, duration: 5 });
      //Updates the player instances
      playerTwo.update();
    }

    //Updates the player instances
    playerOne.update();

    if (currentPlayer.x >= 600 && currentPlayer.y >= 500) {
      position = Number(currentPlayer.y) - 100;
      gsap.to(currentPlayer, { y: position, duration: 5 });
      playerTwo.update();
      //move position.y up by subtracting 100 to y
      //subtract position.x by Number(rollDice) * 100;
      console.log("move up");
    } else {
      console.log("umm");
    }
  }

  //Initializes dice variable
  let diceRoll = document.querySelector("#dice");

  //Creates a p tag on the page that displays the dice roll
  let template =
    `<p><strong>Last Player:</strong> You rolled a ` + rollDice + `!</p>`;
  diceRoll.innerHTML = template;

  //Adds the dice roll number to the position of the ellipse
  position++;
  console.log(turn + " " + position);
}
