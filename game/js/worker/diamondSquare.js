"use strict";
class Random {
    static create(seed) {
        return Math.seedrandom(seed, { global: false });
    }
}
const sendMessage = self.postMessage;
if ('function' === typeof importScripts) {
    importScripts('../../lib/seedrandom.min.js');
    onmessage = (e) => {
        const [seed, nside, roughness] = e.data;
        const heightmap = diamondSquare(seed, nside, roughness);
        sendMessage(heightmap);
        close();
    };
}
function average(...args) {
    return args
        .reduce((prev, cur) => prev + cur, 0)
        / args.length;
}
function diamondSquare(seed, nside, roughness) {
    let data = new Float32Array(nside * nside);
    const rng = Random.create(seed);
    const stepMax = nside - 1;
    const isValidCoor = (x, y) => {
        return x >= 0 && x < nside
            && y >= 0 && y < nside;
    };
    const idx = (x, y) => y * nside + x;
    const get = (x, y) => data[idx(x, y)];
    const set = (x, y, val) => data[idx(x, y)] = val;
    const assign = ([x, y], coors, scale) => {
        const avgValue = average(...coors
            .filter(([x, y]) => isValidCoor(x, y))
            .map(([x, y]) => get(x, y)));
        const randomness = rng() * scale;
        set(x, y, avgValue + randomness);
    };
    const diamond = (step, scale) => {
        const halfstep = step / 2;
        for (let y = halfstep; y <= stepMax; y += step) {
            for (let x = halfstep; x <= stepMax; x += step) {
                const coors = [
                    [x - halfstep, y - halfstep],
                    [x + halfstep, y - halfstep],
                    [x - halfstep, y + halfstep],
                    [x + halfstep, y + halfstep]
                ];
                assign([x, y], coors, scale);
            }
        }
    };
    const square = (step, scale) => {
        const halfstep = step / 2;
        let startMiddle = true;
        for (let y = 0; y <= stepMax; y += halfstep) {
            const start = startMiddle ? halfstep : 0;
            startMiddle = !startMiddle;
            for (let x = start; x <= stepMax; x += step) {
                const coors = [
                    [x, y - halfstep],
                    [x, y + halfstep],
                    [x - halfstep, y],
                    [x + halfstep, y]
                ];
                assign([x, y], coors, scale);
            }
        }
    };
    {
        set(0, 0, rng());
        set(0, nside - 1, rng());
        set(nside - 1, 0, rng());
        set(nside - 1, nside - 1, rng());
        let scale = 0.1;
        for (let step = stepMax; step > 1; step /= 2,
            scale = step / nside * roughness) {
            diamond(step, scale);
            square(step, scale);
        }
    }
    return data;
}
//# sourceMappingURL=diamondSquare.js.map