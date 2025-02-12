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

    step() {
        let choice = floor(random(4));
    }
}