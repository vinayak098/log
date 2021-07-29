class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smokeimg = loadImage("sprites/smoke.png") 
    this.tracjectory = [];
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
    super.display();
    console.log("trace 1");

    if(this.body.velocity.x>10 && this.body.position.x>200){
      var position = [this.body.position.x,this.body.position.y];
      this.tracjectory.push(position);
      
    }
    

    for(var i = 0;i<this.tracjectory.length;i++){
      image(this.smokeimg,this.tracjectory[i][0],this.tracjectory[i][1]);
      console.log("trace 2");
    }  
  }
}
