class box {
    constructor(x, y,width,height) {
      var options = {
          restitution:0.4,
          friction:0,
      }
    this.x = x;
    this.y = y;
    this.height = height;
    this.width = width;
    this.body = Bodies.rectangle(x, y, this.width,this.height, options);

      World.add(world, this.body);
     
    }
    score(){
      if(this.Visibility<0 && this.Visibility>-150){
      score++;
      }
    }
    display(){

    if(this.body.speed>3){
      World.remove(world,this.body);
      push();
      this.Visibility = this.Visibility-5;
      tint(255,this.Visibility);
      pop();
    }

      else{
      var pos = this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
    
      rect(0,0,this.width, this.height);
      pop();
    }
  }
}
