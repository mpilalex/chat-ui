export function getRandomNumber(min = 0, max = 10000) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
