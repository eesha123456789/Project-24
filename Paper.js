class Paper
{
    constructor(x,y,radius)
    {
        var paper_options={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:2
        }
        this.body=Bodies.circle(x,y,radius,paper_options);
        this.radius=radius;
        World.add(world,this.body);
    }

    display()
    {
        var pos=this.body.position
        fill('pink')
        ellipse(pos.x,pos.y,this.radius);
    }
}