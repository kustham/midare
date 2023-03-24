'use client'
import dynamic from 'next/dynamic'
import { Yakamashi } from './yakamashi'

const Sketch = dynamic(() => import('react-p5'), { ssr: false })

export default function SketchYakamashi() {
    return (
        <Sketch
            preload={Yakamashi.preload}
            windowResized={Yakamashi.windowResized}
            setup={Yakamashi.setup}
            draw={Yakamashi.draw}
        />
    )
}
