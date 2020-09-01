//When a rain drop is at ground level, remove it and inform the ground it as hit. Make the ground more blue for every 10 rain drops that hit it. Start the ground at 5% blueness.
//Manages many drops of rain

class RainManager {
  //Sets attributes
  constructor(drops) {
    this.drops = [];
  }

  // Creates new rain drops
  createNewDrops() {
    let newDrop = new RainDrop();
    this.drops.push(newDrop);
  }

  //Checks to see if the rain has hit the ground and if it has, it removes the rain drop
  rainDropHit(i) {
    if (this.drops[i].y >= this.drops[i].hit) {
      this.drops.splice(i, 1);
      newGround.hit();
    }
  }
}

//Rain Drop Class
class RainDrop {
  //Sets attributes
  constructor(x, y, hr, vr, hit, speed) {
    //x position
    this.x = Math.random() * 500;
    //y postion
    this.y = Math.random() * 40;
    //horizontal radius
    this.hr = 10;
    //vertical radius
    this.vr = 10;
    //hit
    this.hit = Math.random() * 50 + 350;
    //Speed of rain
    this.speed = 8 + Math.random() * 2;
  }

  //Displays the rain drops
  update() {
    if (this.y <= this.hit) {
      this.y += this.speed + 0.1;

      if (this.y < this.hit - 40) {
        if (this.hr <= 1) {
          this.hr = 1;
        }
      } else if (this.y < this.hit - 10) {
        if (this.vr <= 1) {
          this.vr = 1;
        }
      }
    }
    //Fill color of rain drop and set the rain drop height, width, and position
    fill(0, 0, 255);
    ellipse(this.x, this.y, this.hr, this.vr);
  }
}

//Ground Class
class Ground {
  //Sets attributes
  constructor(x, y, w, h, counter, blue, green, red) {
    this.x = 0;
    this.y = 400;
    this.w = 500;
    this.h = 100;
    this.counter = 0;
    this.blue = 255 * 0.05;
    this.green = 230;
    this.red = 0;
  }

  // When every 10 rain drops hits the ground, the blue color increases and the green color decreases.
  hit() {
    this.counter++;
    if (this.counter % 10 == 0) {
        this.green--;
        this.blue++;
      if (this.h <= 0) {
        this.h++;
      }
      if (this.blue >= 255) {
        this.blue = 255;
      }
    }
    //Color of rect and the rect
    fill(this.red, this.green, this.blue);
    rect(this.x, this.y, this.w, this.h);
  }
}

//Sets up the page for P5.js
function setup() {
  //Creates a canvas
  createCanvas(500, 500);

  //Creates new instances of the ground and rain
  newRain = new RainManager();
  newGround = new Ground();
}

// Displays the code on the page
function draw() {
  //Sets background color of the canvas
  background(87, 206, 230);

  //Colors the ground from the new initialization
  fill(newGround.red, newGround.green, newGround.blue);

 //Creates the ground from the new initialization
  rect(newGround.x, newGround.y, newGround.w, newGround.h);

  //Adds more rain drops
  if (newRain.drops.length < 60) {
    newRain.createNewDrops();
  }

  //Keeps the rain coming
  for (var i = 0; i < newRain.drops.length; i++) {
    
    newRain.drops[i].update();
    newRain.rainDropHit(i);
  }
}
