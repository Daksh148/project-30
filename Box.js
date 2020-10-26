class Box {
    constructor(x, y, width, height) {
      var options = {
          'restitution':0.8,
          'friction':4.2,
          'density':0.01
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.image = loadImage("sprites/wood1.png");
      this.Visiblity=255;
      
      World.add(world, this.body);
    }
    display(){
      if(this.body.speed<3){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
      pop();
    }
    else{World.remove(world,this.body);
      push()
      this.Visiblity=this.Visiblity-5;
      tint(255,this.Visiblity);
      image(this.image,this.body.position.x,this.body.position.y,30,40);
      
      
      pop();
    }
  }
  };
  