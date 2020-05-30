class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("sprites/dhruv.png");
   
  //  this.image1 = loadImage("sprites/samyak.png");
    this.Visiblity = 255;
  }

 display(){
   //console.log(this.body.speed);
   if(this.body.speed < 3){
    super.display();
   }
   else{
     World.remove(world, this.body);
     push();
     this.Visiblity = this.Visiblity ;
     tint(255,this.Visiblity);
     image(this.image, this.body.position.x, this.body.position.y, 100, 100);
     image(this.image1, this.body.position.x, this.body.position.y, 100, 100);
     pop();
   }
   
 }

score(){
  if(this.Visiblity<0 &&this.Visiblity>-1005){
    score++;
  }
}

};