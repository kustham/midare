import { Sketch } from '@/app/common/SketchInterface'
import p5Types from 'p5'
import { KusareFactory } from './kusareFactory'
import { KusareEntity } from './kusareEntity'

const FRAME_RATE: number = 10
const PRODUCUTION_NUMBER: number = 10
const DIRTINESS_SEED: number = 0.1
const VOLUME_SEED: number = 2.8
const STINK_SEED: number = 3.3
const PAINFUL_SEED: number = 1.4
let kusare: Array<KusareEntity> = KusareFactory.make(
    PRODUCUTION_NUMBER,
    DIRTINESS_SEED,
    VOLUME_SEED,
    STINK_SEED,
    PAINFUL_SEED
)

export const Kusare: Sketch = {
    preload: (p5: p5Types) => {},

    windowResized: (p5: p5Types) => {
        p5.resizeCanvas(p5.windowWidth, p5.windowHeight / 2)
    },

    setup: (p5: p5Types, canvasParentRef: Element) => {
        p5.frameRate(FRAME_RATE)
        p5.createCanvas(p5.windowWidth, p5.windowHeight / 2, p5.WEBGL).parent(
            canvasParentRef
        )
        p5.colorMode(p5.HSB, p5.width, p5.height, 100)
        p5.noStroke()
    },

    mousePressed: function (p5: p5Types): void {
        console.log('mousePressed!')
    },

    draw: (p5: p5Types) => {
        p5.background(0)
        p5.normalMaterial()
        p5.stroke(p5.random(255))
        p5.rotateX(p5.frameCount / 10)
        p5.rotateZ(p5.noise(p5.frameCount / 10))
        kusare.forEach((k) => {
            k.run(p5)
        })
    },
}
