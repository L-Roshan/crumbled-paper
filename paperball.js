class Paper{
    constructor(x,y,radius){
       var options={
        isStstic:false,
        restitution:0.3,
        friction:0,
        density:1.2,
      }
      this.radius = radius;
      this.body = Bodies.circle(x,y,this.radius,options);

      this.image = loadImage("paper.png");
      World.add(world,this.body);
      }
      display(){
          Fill("purple");
          var posit = this.body.position;
          Push();
          translate(posit.x,posit.y);
          imageMode(CENTER);
          image(this.image,0,0,this.radius,this.radius);
          pop();
      }

}