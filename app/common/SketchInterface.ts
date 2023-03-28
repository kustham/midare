import p5Types from 'p5'

export interface Sketch {
    // eslint-disable-next-line no-unused-vars
    preload: (p5: p5Types) => void
    // eslint-disable-next-line no-unused-vars
    windowResized: (p5: p5Types) => void
    // eslint-disable-next-line no-unused-vars
    setup: (p5: p5Types, canvasParentRef: Element) => void
    // eslint-disable-next-line no-unused-vars
    mousePressed: (p5: p5Types) => void
    // eslint-disable-next-line no-unused-vars
    mouseClicked: (p5: p5Types) => void
    // eslint-disable-next-line no-unused-vars
    draw: (p5: p5Types) => void
}
