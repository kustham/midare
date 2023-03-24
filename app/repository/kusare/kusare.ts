import { SketchInterface } from '@/app/common/SketchInterface'
import p5Types from 'p5'
import { KusareEntity } from './kusareEntity'

const frameRate: number = 10
const kusare = new KusareEntity(0)

export const Kusare: SketchInterface = {
    preload: (p5: p5Types) => {},

    windowResized: (p5: p5Types) => {
        p5.resizeCanvas(p5.windowWidth, p5.windowHeight / 2)
    },

    setup: (p5: p5Types, canvasParentRef: Element) => {
        p5.frameRate(frameRate)
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
        kusare.run(p5)
    },
}
