class Paper{
    constructor(x,y){
        var options = {
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        this.body = Bodies.circle(x,y,50, options);
        World.add(world, this.body); 
        this.image=loadImage("paper.png");
    }
    display(){
        var pos = this.body.position;
        imageMode(CENTER);
        image(this.image, pos.x, pos.y+30,50, 50); 

    }
}