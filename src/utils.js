export function randBetween(min, max) {
    return Math.ceil(Math.random() * (max - min) + min);
}

export function randomArrayOfValues(size, min, max) {
    const result = [];
    for (let i = 0; i < size; i++) {
        result.push(randBetween(min, max));
    }
    return result;
}

export async function sleep(time) {
    return new Promise(r => setTimeout(r, time));
}
