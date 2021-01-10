class Paper{
    constructor(x,y,r){
        var options={
            isStatic:false,
            restitution:0.9,
            friction:0.5,
            density:1.2  
           }
           this.r=r;
    this.body= Matter.Bodies.circle(150,400,15,options);
    this.image=loadImage("paper.png");
    World.add(world,this.body);
        }
       display(){
           var pos=this.body.position;
           image(this.image,pos.x,pos.y,this.r,this.r)
       } 
    }