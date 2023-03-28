import p5Types from 'p5'

export class KusareEntity {
    dirtiness: number
    volume: number
    stink: number
    painful: number

    //腐れの構成要素
    //1.醜さ(dirtiness)
    //2.規模(volume)
    //3.臭さ(stink)
    //4.切なさ(painful)
    constructor(
        _dirtiness: number,
        _volume: number,
        _stink: number,
        _painful: number
    ) {
        this.dirtiness = _dirtiness
        this.volume = _volume
        this.stink = _stink
        this.painful = _painful
    }

    render(p5: p5Types) {
        p5.line(
            -this.dirtiness,
            this.dirtiness,
            this.stink,
            -this.stink,
            this.painful,
            -this.painful
        )
        p5.line(
            this.dirtiness,
            -this.dirtiness,
            -this.stink,
            this.stink,
            -this.painful,
            this.painful
        )
    }

    updates(p5: p5Types) {
        //Weight Change
        p5.strokeWeight(p5.random(2, 5))
        //Color Change
        p5.stroke(p5.random(255), p5.random(255), p5.random(255))
        //Parameters Update
        this.painful -= Math.log(this.dirtiness + this.stink)
        this.dirtiness += Math.log(
            this.volume * p5.noise(this.dirtiness, this.stink, this.painful)
        )
        this.stink += Math.log(
            this.volume * p5.noise(this.dirtiness, this.stink, this.painful)
        )
    }

    logger() {
        console.log('醜さ:' + this.dirtiness)
        console.log('規模:' + this.volume)
        console.log('臭さ:' + this.stink)
        console.log('切なさ:' + this.painful)
    }
}
