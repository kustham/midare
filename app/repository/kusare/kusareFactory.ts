import { KusareEntity } from './kusareEntity'
import p5 from 'p5'

export const KusareFactory = {
    make: (n: number, d: number, v: number, s: number, p: number) => {
        const kusare: Array<KusareEntity> = []
        for (let i = 0; i < n; i++) {
            kusare.push(
                new KusareEntity(
                    estimateDirtiness(d),
                    estimateVolume(v),
                    estimateStink(s),
                    estimatePainful(p)
                )
            )
        }
        return kusare
    },
}

function estimateDirtiness(d: number): number {
    let dirtiness = 0
    dirtiness = Math.pow(d**d, Math.random())

    return dirtiness*100
}

function estimateVolume(v: number): number {
    let volume = 0
    volume = Math.pow(Math.sqrt(v), Math.random())

    return volume * 100
}
function estimateStink(s: number): number {
    let stink = 0
    stink = Math.pow(s, Math.random())

    return stink * 100
}

function estimatePainful(p: number): number {
    let painful = 0
    painful = Math.pow(p, Math.random())

    return painful * 100
}
