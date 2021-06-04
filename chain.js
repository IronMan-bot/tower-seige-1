class chain{
    constructor(car1,car2){
        var information = {
            bodyA:car1,
            pointB:car2,
            stiffness:0.5,
            
        }
this.body = Constraint.create(information)
World.add(world,this.body)


    }
    display(){
        if( this.body.bodyA){
            stroke ("brown")
            strokeWeight(3)
           line(this.body.bodyA.position.x,this.body.bodyA.position.y,this.body.pointB.x,this.body.pointB.y)
               }
        }

    disconnectBall1(){
        this.body.bodyA = null

    }
}
