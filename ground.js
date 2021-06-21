class Ground{
    constructor(x,y,w,h){
        var options ={
            isStatic : true
        }
        this.ground = Bodies.rectangle(x,y,w,h,options);
        World.add(world,this.ground);
        this.width = w;
        this.height = h;

    }
    display1(){

        rectMode(CENTER);
        rect(this.ground.position.x,this.ground.position.y,this.width,this.height);

    }
}