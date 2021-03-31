class bobObject extends BaseClass
{
constructor(x,y,width,height){
var options=
{isStatic:false,
    restitution:0.8,
    friction:1.0,
    density:1.5 
}
 this.body=Bodies.circle(250,300     ,this.radius,options);
// this.width=width;
// this.height=height;
World.add(world,this.body);
}
display(){
 var pos=this.body.position;
pos.x=100
pos.y=300
var angle=this.body.angle
push();
translate(pos.x,pos.y);
rotate(angle);
pop()
}





}
