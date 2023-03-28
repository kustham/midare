import p5Types from 'p5'
import { KusareEntity } from './kusareEntity'
import { KusareFactory } from './kusareFactory'
import { Sketch } from '@/app/common/SketchInterface'

const FRAME_RATE: number = 10
const PRODUCUTION_NUMBER: number = 10
const DIRTINESS_SEED: number = 0.1
const VOLUME_SEED: number = 2.8
const STINK_SEED: number = 1.3
const PAINFUL_SEED: number = 1.4
let kusare: Array<KusareEntity> = KusareFactory.make(
    PRODUCUTION_NUMBER,
    DIRTINESS_SEED,
    VOLUME_SEED,
    STINK_SEED,
    PAINFUL_SEED
)

let nowPlaying: Boolean = true

export const Kusare: Sketch = {
    preload: () => {},

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

    mousePressed: function (): void {
        //none
    },

    mouseClicked: function (p5: p5Types): void {
        if (nowPlaying) {
            nowPlaying = false
            console.log('Loop Stop')
            p5.noLoop()
        } else {
            nowPlaying = true
            console.log('Loop Restart')
            p5.loop()
        }
    },

    draw: (p5: p5Types) => {
        p5.background(0)
        p5.normalMaterial()

        kusare.forEach((k) => {
            k.updates(p5)
            k.render(p5)
            k.logger()
        })
    },
}
