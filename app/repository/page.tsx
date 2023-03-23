'use client'
import p5Types from 'p5'
import dynamic from 'next/dynamic'

const Sketch = dynamic(() => import('react-p5'), { ssr: false })

export default function SketchComponent() {
    const preload = (p5: p5Types) => {
        // ここは今回使わない
    }

    const windowResized = (p5: p5Types) => {
        p5.resizeCanvas(p5.windowWidth, p5.windowHeight)
    }

    const setup = (p5: p5Types, canvasParentRef: Element) => {
        p5.createCanvas(p5.windowWidth, p5.windowHeight, p5.WEBGL).parent(
            canvasParentRef
        )
        p5.colorMode(p5.HSB, p5.width, p5.height, 100)
        p5.noStroke()
    }

    let angle = 0

    const draw = (p5: p5Types) => {
        p5.background(0)
        p5.normalMaterial()
        p5.rotateX(p5.noise(angle) * 7)
        p5.rotateY(angle)
        angle = angle + 0.01
        p5.box(100)
    }

    return (
        <>
            <Sketch
                preload={preload}
                setup={setup}
                draw={draw}
                windowResized={windowResized}
            />
        </>
    )
}
