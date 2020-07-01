class Player{

constructor(x,y,width,height){
var opt = {
    isStattic : true
}
this.body = Bodies.rectangle(x,y,width,height);
this.x = x;
this.y = y
this.width = width;
this.height = height;
World.add(world,this.body);
}

display(){
    var pos = this.body.position;
    rectMode(CENTER);
    fill("red");
    rect(pos.x,pos.y,this.width,this.height);
}


}