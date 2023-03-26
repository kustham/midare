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

    run(p5: p5Types) {
        p5.bezier(
            -this.dirtiness,
            this.dirtiness,
            this.volume,
            -this.volume,
            this.stink,
            -this.stink,
            this.painful,
            -this.painful
        )
        p5.bezier(
            this.dirtiness,
            -this.dirtiness,
            -this.volume,
            this.volume,
            -this.stink,
            this.stink,
            -this.painful,
            this.painful
        )
    }
}
