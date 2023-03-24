'use client'
import dynamic from 'next/dynamic'
import { Kusare } from './kusare'

const Sketch = dynamic(() => import('react-p5'), { ssr: false })

export default function SketchKusare() {
    return (
        <>
            <Sketch
                preload={Kusare.preload}
                windowResized={Kusare.windowResized}
                setup={Kusare.setup}
                mousePressed={Kusare.mousePressed}
                draw={Kusare.draw}
            />
        </>
    )
}
