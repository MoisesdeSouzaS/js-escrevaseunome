function setup() {
    createCanvas(600, 400);
     background("black");
  }
  
  function draw() {
   
  
    stroke("white");
    fill("white");
  
    // console.log(mouseIsPressed);
  
    if (mouseIsPressed) {
      rect(mouseX, mouseY, 20, 35);
    }
  }
  