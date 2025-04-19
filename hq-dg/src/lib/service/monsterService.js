import { Monster } from "../model/Monster.js";
import { getMonsterTypeNamesForMilestoneLevel, getMonsterTypeByName, getMonsterFeaturesByTypeAndTier } from "../store/MonsterStore.js"
import { getRandomInt, getRandomObjectsfromArray } from "./utils.js";

export const getRoomMonsters = (adventure) => {
    const currentMilestoneLevel = adventure.adventureProgress.milestoneLevel;
    const numberOfPlayers = adventure.numberOfPlayers;
    const adventureDifficulty = adventure.difficulty;
    
    const randomMonsterTypeNames = getRandomMonsterTypesNames(currentMilestoneLevel);

    return getRandomMonsters(randomMonsterTypeNames, adventureDifficulty, numberOfPlayers, currentMilestoneLevel);

}

export const getWonderingMonsters = (adventure) => {
    const availableMonsterTypeNames = adventure.adventureProgress.discoveredMonsterTypes;
    const currentMilestoneLevel = adventure.adventureProgress.milestoneLevel;
    const numberOfPlayers = adventure.numberOfPlayers;
    const adventureDifficulty = adventure.difficulty;
    
    const randomMonsterTypeNames = getRandomMonsterTypesNames(currentMilestoneLevel, availableMonsterTypeNames);

    return getRandomMonsters(randomMonsterTypeNames, adventureDifficulty, numberOfPlayers, currentMilestoneLevel);

}

const getRandomMonsters = (monsterTypeNames, adventureDifficulty, numberOfPlayers, currentMilestoneLevel) => {
    const monsters = [];
    monsterTypeNames.forEach(monsterTypeName => {
            const monsterType = getMonsterTypeByName(monsterTypeName);
            const monsterAmount = getMonsterAmount(numberOfPlayers, adventureDifficulty, monsterType);
            const availableMonsterFeatures = getMonsterFeatures(monsterType, currentMilestoneLevel, adventureDifficulty);
            const monsterBatch = getMonsterBatch(monsterAmount, monsterType, availableMonsterFeatures);
            console.log(`Generated ${monsterAmount} ${monsterTypeName} monsters:`, monsterBatch);
            monsters.push(...monsterBatch);
        }
    );
    return monsters;
}

const getRandomMonsterTypesNames = (currentMilestoneLevel, availableMonsterTypeNames) => {
    if (availableMonsterTypeNames == null) {
        availableMonsterTypeNames = getMonsterTypeNamesForMilestoneLevel(currentMilestoneLevel);
    }
    if (availableMonsterTypeNames.length === 0) {
        return [];
    }
    return getRandomObjectsfromArray(availableMonsterTypeNames, getRandomInt(1, 3));
}

const getMonsterAmount = (numberOfPlayers, difficulty, monsterType) => {
    const bodyPointsCap = difficulty * numberOfPlayers;
    const monsterAmount = Math.floor(bodyPointsCap / monsterType.bodyPoints);
    return Math.min(monsterAmount, monsterType.modelAmount);
}

const getMonsterFeatures = (monsterType, currentMilestoneLevel, adventureDifficulty) => {
    const monsterFeatures = getMonsterFeaturesByTypeAndTier(monsterType.monsterTypeName, 
        currentMilestoneLevel + adventureDifficulty);
    return monsterFeatures;
}


const getMonsterBatch = (amount, monsterType, availableMonsterFeatures) => {
    const monsters = [];
    for (let i = 0; i < amount; i++) {
        const monsterFeatures = getRandomObjectsfromArray(availableMonsterFeatures, getRandomInt(0, 2));
        const monster = new Monster(monsterType, monsterFeatures);
        monsters.push(monster);
    }
    return monsters;
}

