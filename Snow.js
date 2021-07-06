class Snow {
    constructor(x, y, width, height) {
      var options = {
          'restitution':0.8,
          'friction':10,
          'density':100.0
      }



      this.body = Bodies.rectangle(x, y, width,  height, options);
      this.width = width;
      this.height = height;
      this.image = loadImage("snow.png")
     

      
      World.add(world, this.body);}
    



    updateY(){
        if (this.body.position.y > height){
            Matter.Body.setPosition(this.body , {x:random(0,600), y:0});
        }

    }
    display(){
        rectMode(CENTER);
        image(this.image,this.body.position.x, this.body.position.y, this.width, this.height);
      
    }
  };