export const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const rollD6 = () => {
    return getRandomInt(1, 6);
}

export const rollD10 = () => {
    return getRandomInt(1, 10);
}


export const getRandomCategory = () => {
    const categories = Object.values(categorys);
    const randomIndex = Math.floor(Math.random() * categories.length);
    return categories[randomIndex];
}

export const categorys = {
    EASY: 1,
    MEDIUM: 2,
    HARD: 3
}