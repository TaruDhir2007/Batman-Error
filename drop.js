class Drop{
    constructor(x, y, options){
        var options = {
       'isStatic' : false,
       'density' : 1.2,
       'friction ': 1,
       'restitution' : 0}
       this.body = Bodies.rectangle(20, 20, 640, 5, options)
       World.add(world, this.body)

    }
    display(){
      push();
      translate(this.body.position.x, this.body.position.y);
      ellipseMode(radius);
      fill("blue")
      ellipse(this.body, 0, 0, 70, 70);
      pop();
    }
}