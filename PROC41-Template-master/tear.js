class ame{
    constructor(x,y){
        this.rain = Bodies.circle(x,y,1);

        World.add(world,this.rain);
    }
    display(){
        var p = this.rain.position;

        push();
        translate(p.x,p.y)
        ellipseMode(RADIUS);
        fill("blue");
        ellipse(0,0,2);
        pop();
    }
    
}