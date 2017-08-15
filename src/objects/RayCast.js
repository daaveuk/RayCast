import Phaser from 'phaser'

export default class RayCast {
    constructor({game, point, angle, range}) {
        super(game)
        
        this.sin = Math.sin(angle)
        this.cos = Math.cos(angle)
        this.noWall = {length2: Infinity}
        
    }
    
    ray(origin) {
        let stepX,
            stepY,
            nextStep
            
        stepX = step(sin, cos, origin.x, origin.y)
        stepY = step(cos, sin, origin.y, origin.x, true)
        
        nextStep = stepX.length2 < stepY.length2 ? inspect(stepY, 1, 0 origin.distance, stepY) : inspect(stepY, 0, 1, origin.distence, stepY.x)
        
    }
}