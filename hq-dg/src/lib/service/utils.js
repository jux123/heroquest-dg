export const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const rollD6 = () => {
    return getRandomInt(1, 6);
}

export const rollD10 = () => {
    return getRandomInt(1, 10);
}


export const getRandomDifficulty = () => {
    const difficultiesArr = Object.values(difficulties);
    const randomIndex = Math.floor(Math.random() * difficultiesArr.length);
    return difficultiesArr[randomIndex];
}

export const getRandomEncounterDifficulty = (adventureDifficulty) => {    
    switch (adventureDifficulty) {
        case difficulties.EASY:
            return Math.max(getRandomDifficulty()  - 1, difficulties.EASY);
        case difficulties.MEDIUM:
            return getRandomDifficulty();
        case difficulties.HARD:
            return Math.min(getRandomDifficulty()  + 1, difficulties.HARD);
        default:
            throw new Error('Invalid adventure difficulty');
    }
}

export const difficulties = {
    EASY: 1,
    MEDIUM: 2,
    HARD: 3
}

export const getRandomObjectsfromArray = (array, numberOfObjects) => {
    const shuffledArray = array.sort(() => 0.5 - Math.random());
    return shuffledArray.slice(0, numberOfObjects);
}   