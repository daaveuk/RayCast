/* globals __DEV__ */
import Phaser from 'phaser'
import Mushroom from '../sprites/Mushroom'
import Map from '../objects/Map'

export default class extends Phaser.State {
  init () {}
  preload () {}

  create () {
    
    this.map = new Map({
      size: 64
    })
    
    console.log(this.map)
    
    this.mushroom = new Mushroom({
      game: this.game,
      x: this.world.centerX,
      y: this.world.centerY,
      asset: 'mushroom'
    })
    
    this.game.add.existing(this.mushroom)
  }

  render () {
    if (__DEV__) {
      this.game.debug.spriteInfo(this.mushroom, 32, 32)
    }
  }
}
