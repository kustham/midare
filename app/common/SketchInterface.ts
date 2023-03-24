import p5Types from 'p5'

export interface SketchInterface {
    preload: (p5: p5Types) => void

    windowResized: (p5: p5Types) => void

    setup: (p5: p5Types, canvasParentRef: Element) => void

    mousePressed: (p5: p5Types) => void

    draw: (p5: p5Types) => void
}
