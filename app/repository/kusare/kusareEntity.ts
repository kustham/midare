import p5Types from 'p5'

export class KusareEntity {
    angle: number
    id: string

    constructor(_angle: number) {
        this.angle = _angle
        this.id = this.getUniqueStr()
    }
    run(p5: p5Types) {
        p5.rotateX(p5.noise(this.angle) * p5.noise(this.angle))
        p5.rotateY(this.angle)
        this.angle = this.angle + 0.01
        p5.box(100)
        console.log(this.angle)
    }

    getUniqueStr(myStrong?: number): string {
        let strong = 1000
        if (myStrong) strong = myStrong
        return (
            new Date().getTime().toString(16) +
            Math.floor(strong * Math.random()).toString(16)
        )
    }
}
