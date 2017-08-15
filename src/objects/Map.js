import Phaser from 'phaser'

export default class Map {
    constructor({size}) {
        this.size = size
        this.wallGrid = new Uint8Array(size * size);
        this.wallGrid = this.randomise(this.size, this.wallGrid)
        return this.wallGrid
    }
    
    randomise(size, wallGrid) {
        for(let i = 0; i < size * size; i++) {
            this.wallGrid[i] = Math.random() < 0.3 ? 1 : 0
        }
        
        return wallGrid;
    }
}