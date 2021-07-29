class Plinko {
    constructor(x,y,width,height) {
    var options = {
        isStatic: true
    }
    
    this.body = Bodies.circle(200,100,20,options);
    World.add(world,this.body);

    }
    display(){
      var pos =this.body.position;
      ellipseMode(RADIUS);
      ellipse(this.body.position.x,this.body.position.y,10,10);
      fill("white");
    }
  };