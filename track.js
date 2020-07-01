class Track{

constructor(x,y,width,height){
    var opt = {
        isStatic : true
    }
    this.body = Bodies.rectangle(x,y,width,height,opt);
    this.image = loadImage("track.png");
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    World.add(world,this.body);
}

display(){
    var pos = this.body.position;
     imageMode(CENTER);
     fill("red");
     image(this.image,pos.x,pos.y,this.width,this.height);
}

};