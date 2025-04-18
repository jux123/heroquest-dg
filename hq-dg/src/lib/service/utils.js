export const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const rollD6 = () => {
    return getRandomInt(1, 6);
}

export const rollD10 = () => {
    return getRandomInt(1, 10);
}
