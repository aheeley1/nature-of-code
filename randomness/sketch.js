let walker; //global variable for a single Walker object

function setup() {
  //setup() executed once when the sketch starts
  createCanvas(640, 240);
  walker = new Walker();
  //draw once in setup (instead of draw() default) to stop continual clearing 
  //to ensure trail of the random walker is visible
  background(255);  
}

function draw() {
  //with each cycle through draw(), the walker takes a step and draws a dot
  //loops forever until quit, call functions
  walker.step4();
  walker.show();
}

class Walker {
  constructor() {
      // initial walker to center of the digital canvas
      this.x = width / 2;
      this.y = height / 2;
  }

  show() {
      //methods are defined inside a class, no function keyword
      stroke(0);
      point(this.x,this.y);  
      //use this keyword when referencing properties/variable of object
  }

  step4() {
      //allows 4 possible moves(up,down.left,right)
      let choice = floor(random(4));

      if (choice === 0) {
        this.x++; //move right
      }  else if (choice === 1) {
        this.x--; // move left
      } else if (choice === 2) {
        this.y++; //move backward (down a pixel)
      }  else if (choice === 3) {
        this.y--;  //move forward (up a pixel)
      }
  }

  step9() {
    //allows 9 possible moves (stay put, up,down,left,right,diagonals)
    let xstep = floor(random(3)) - 1; // option -1,0,1
    let ystep = floor(random(3)) - 1;

    this.x += xstep;
    this.y += ystep;
  }
}