var gravity = 4;
var rocket = { x: 100, y: 100 };
var fuel = 100;
var speed = 0;

window.addEventListener(
  "keydown",
  function(e) {
    // space and arrow keys
    if ([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
      e.preventDefault();
    }
  },
  false
);

//Rocket
function eve(rocket) {
  fill(255);
  stroke(0);
  strokeWeight(2);
  push();
  translate(rocket.x + 21, rocket.y - 3);
  rotate(2.9);
  ellipse(0, 0, 10, 40);
  pop();
  push();
  translate(rocket.x - 21, rocket.y - 3);
  rotate(-2.9);
  ellipse(0, 0, 10, 40);
  pop();
  ellipse(rocket.x, rocket.y, 40, 65);
  fill(0);
  ellipse(rocket.x, rocket.y - 30, 40, 10);
  fill(255);
  noStroke();
  ellipse(rocket.x, rocket.y - 35, 35, 15);
  ellipse(rocket.x, rocket.y - 37, 33, 20);
  ellipse(rocket.x, rocket.y - 41, 30, 20);
  fill(0);
  ellipse(rocket.x, rocket.y - 37, 25, 15);
  stroke(0, 150, 255);
  noFill();
  strokeWeight(2);
  arc(rocket.x - 5, rocket.y - 36, 7, 5, 3, 6.5);
  arc(rocket.x + 5, rocket.y - 36, 7, 5, 3, 6.5);
}

function move() {
  if (keyIsDown(UP_ARROW) && fuel > 0) {
    fuel -= 1;
    gravity -= 0.5;
    speed -= 1;
  }
  if (gravity > 0) {
    gravity += 0.15;
    speed += 0.5;
  }
  if (gravity < 0) {
    gravity += 0.3;
  }
}
//start & reset
function keyPressed() {
  if (keyCode === ENTER) {
    gravity = 0.5;
    rocket.x = 100;
    rocket.y = 100;
    fuel = 100;
    speed = 0;
  }
}

function gameOver() {
  if (fuel <= 0 || (rocket.y >= height - 50 && speed > 25)) {
    stroke(255);
    strokeWeight(2);
    fill(255);
    textSize(50);
    text("you lost", 200, 200);
    gravity = 0;
    rocket.y = height - 50;
  } else if (rocket.y >= height - 50 && speed < 25) {
    stroke(255);
    strokeWeight(2);
    fill(255);
    textSize(50);
    text("you won", 200, 200);
    gravity = 0;
    rocket.y = height - 50;
  }
}
//Anzeige
function screen() {
  stroke(10);
  textSize(15);
  text("Fuel = " + fuel, 50, 50);
  text("Speed = " + speed, 50, 70);
}

function draw() {
  clear();
  background(0);
  //ground
  fill(255);
  noStroke();
  rect(0, height - 20, width, 20);
  screen();
  eve(rocket);
  move();
  rocket.y += gravity;
  gameOver();
}
