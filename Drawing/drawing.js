var rotation = 0;

// function setup(){
//  c = createCanvas(displayWidth, displayHeight)
//  background(255, 255, 255)
//  strokeWeight(5)
//  stroke(0)
//  setInterval(randomStroke, 50)
// }
function setup() {
  createCanvas(displayWidth, displayHeight);
}

function draw() {
//   if (mouseIsPressed) {
//     fill(0);
//   } else {
//     fill(255);
//   }
//   ellipse(mouseX, mouseY, 80, 80);

    rotation++;
    
    discoBrush(rotation);
}

function discoBrush(degrees) {
    var red = random(0, 100);
        var green = random(0, 50);
        var blue = random(0, 225);
        
        fill(red, green, blue);
        rotate(degrees);
        rect(mouseX, mouseY, mouseX, mouseY);
}