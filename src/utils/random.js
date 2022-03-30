export function randBetween(min, max) {
    return Math.ceil(Math.random() * (max - min) + min);
}

export function randArray(size, min, max) {
    const result = [];
    for (let i = 0; i < size; i++) {
        result.push(randBetween(min, max));
    }
    return result;
}
