
// First tutorial, set up basic and fun canvas
function runSetupCanvas(p) {
  p.setup = function () {
    // Create a variable holding a new canvas
    var myCanvas = p.createCanvas(600, 400);
    // assign the canvas to a specific div element in the code
    myCanvas.parent('p5_sketch')
  };
  
  p.draw = function () {
    // Create a black rectangle to cover the canvas.
    // Make the rectangle black with an alpha value of 12 so that
    // the white circle following the cursor slowly fades into the background.
    p.background(0, 11);
  
    // Create the circle that will follow the cursor as it hovers
    // over the canvas.
    p.fill(255);
    p.noStroke();
    p.ellipse(p.mouseX, p.mouseY, 60, 60);
  };
}

// Merry Xmas!
function letItSnow(p) {

  // Here we define all variables that need to be global

  // the width and height of the canvas
  const width = 600; const height = 400;
  // the vertical buffer, so the snow can appear from above
  let y = -1200;
  // the number of snowflakes we want to see
  let snowflakes = 400;

  p.setup = function() {
    // Create a variable holding a new canvas
    var myCanvas = p.createCanvas(width, height);
    // Lower the framerate
    p.frameRate(10);
    // assign te canvas to a specific div element in the code
    myCanvas.parent('p5_sketch')

  }

  p.draw = function() {
    p.background('black');

    // set all circles to no-stroke
    p.noStroke();
    // iterate over the snowflakes and draw them
    for (let s = 0; s < snowflakes; s++) {
      // we generate a circle with random x,y, and radius values
      p.circle(p.random(width), y + p.random(1200), p.random(1, 6));
    }
    
    // move the snowflakes down
    y += 20;
    
    // if y is greater than 0, reset it to -600 (so the snowflakes can coming down)
    if (y > 0) {
      y = -600;
    }
  }
}

new p5(letItSnow);
