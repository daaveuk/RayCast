import Phaser from 'phaser'


export default class Player {
    constructor({game, x, y, direction}) {
        super(game, x, y, direction)
        this.x          = x
        this.y          = y
        this.direction  = direction
    }
}