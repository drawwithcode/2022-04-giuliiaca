var colors = [
  "#4e79a7",
  "#f28e2c",
  "#e15759",
  "#76b7b2",
  "#59a14f",
  "#edc949",
  "#af7aa1",
  "#ff9da7",
  "#9c755f",
  "#bab0ab",
];
let myColor = 20;

function setup() {
  createCanvas(windowWidth, windowHeight);
  setShakeThreshold(10);
  textSize(20);
  textAlign(CENTER);
}

function draw() {
  background("white");
  for (let i = 0; i < touches.length; i++) {
    const touch = touches[i];

    const color = colors[touch.id % colors.length];

    push();
    fill(color);
    noStroke();
    ellipse(touch.x, touch.y, 55);
    pop();
  }
  textSize(20);
  textAlign(CENTER);
  const display = touches.length + "touch points";
  text(display, width / 2, height / 4);

  text("Shake or turn to see what happened", width / 2, height / 2);
  fill(myColor);
}

function touchMoved() {
  return false;
}
function deviceTurned() {
  if (turnAxis === "X") {
    background("#9ee493");
  }
  if (turnAxis === "Y") {
    background("#6369d1");
  }
  if (turnAxis === "Z") {
    background("#E2725B");
  }
}

function deviceShaken() {
  myColor += 0.3;
  if (myColor > 255) myColor = 10;
}

// request permissions on iOS
function touchEnded(event) {
  if (DeviceOrientationEvent && DeviceOrientationEvent.requestPermission) {
    DeviceOrientationEvent.requestPermission();
  }
}
