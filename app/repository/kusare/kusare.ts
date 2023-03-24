import { SketchInterface } from '@/app/common/SketchInterface'
import p5Types from 'p5'

let angle = 0

export const Kusare: SketchInterface = {
    preload: (p5: p5Types) => {},

    windowResized: (p5: p5Types) => {
        p5.resizeCanvas(p5.windowWidth, p5.windowHeight)
    },

    setup: (p5: p5Types, canvasParentRef: Element) => {
        p5.createCanvas(p5.windowWidth, p5.windowHeight, p5.WEBGL).parent(
            canvasParentRef
        )
        p5.colorMode(p5.HSB, p5.width, p5.height, 100)
        p5.noStroke()
    },

    draw: (p5: p5Types) => {
        p5.background(0)
        p5.normalMaterial()
        p5.rotateX(p5.noise(angle) * 7)
        p5.rotateY(angle)
        angle = angle + 0.01
        p5.box(100)
    },
}
