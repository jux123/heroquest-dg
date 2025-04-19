import { MonsterFeature, MonsterType, monsterTypeName } from "../model/Monster.js";

export const monstersTypes = [
    new MonsterType(1, monsterTypeName.GOBLIN, 10, 2, 2, 1, 1, 6),
    new MonsterType(1, monsterTypeName.SKELETON, 6, 2, 2, 1, 0, 6),
    new MonsterType(1, monsterTypeName.ZOMBIE, 5, 2, 3, 1, 0, 4),
    new MonsterType(2, monsterTypeName.ORC, 8, 3, 2, 1, 2, 8),
    new MonsterType(2, monsterTypeName.MUMMY, 4, 3, 4, 2, 0, 2),
    new MonsterType(3, monsterTypeName.ABOMINATION, 6, 3, 3, 2, 3, 3),
    new MonsterType(3, monsterTypeName.DREAD_WARRIOR, 7, 4, 4, 3, 3, 3),
    new MonsterType(4, monsterTypeName.GARGOYLE, 6, 4, 5, 3, 4, 1)
    
];

export const getMonsterTypeByName = (monsterTypeName) => {
    return monstersTypes.find(m => m.monsterTypesName === monsterTypeName);
}

export const getMonsterTypeNamesForMilestoneLevel = (tier) => {
    return monstersTypes.filter(m => m.tier <= tier).map(m => m.monsterTypesName);
}

export const getMonsterFeaturesByTypeAndTier = (monsterTypeName, tier) => {
    return monsterFeatures
        .filter(mf => mf.monsterTypeNames.includes(monsterTypeName))
        .filter(mf => mf.tier <= tier);
}

export const monsterFeatures = [
    new MonsterFeature(1, 'Long weapon', 'Can attack diagonally. +1 defence when adjacent same type monster', 
        [monsterTypeName.SKELETON, monsterTypeName.ORC, monsterTypeName.ABOMINATION]),
    new MonsterFeature(1, 'Ranged', 'Can attack when in line of sight', [monsterTypeName.GOBLIN, 
        monsterTypeName.SKELETON, monsterTypeName.ORC]),
    new MonsterFeature(1, 'Stealth', 'Can hide in shadows, place near, free action', [monsterTypeName.GOBLIN, monsterTypeName.MUMMY]),
    new MonsterFeature(1, 'Regeneration', 'Can heal 1 point of damage each turn', [monsterTypeName.MUMMY, 
        monsterTypeName.ABOMINATION]),
    new MonsterFeature(2, 'Poison', 'Can poison the hero, skips action', [monsterTypeName.ORC, monsterTypeName.ZOMBIE]),
    new MonsterFeature(2, 'Fear', 'Can cause fear in the hero, on failed mind check flees', 
        [monsterTypeName.MUMMY, monsterTypeName.ABOMINATION]),
    new MonsterFeature(3, 'Commander', '+1 attack, defense to other monsters in movement range', 
        [monsterTypeName.ORC, monsterTypeName.DREAD_WARRIOR, monsterTypeName.GARGOYLE]),
    new MonsterFeature(2, 'Spell caster 1', 'Has 1 random Chaos spell', [monsterTypeName.GARGOYLE, 
        monsterTypeName.DREAD_WARRIOR, monsterTypeName.ABOMINATION, monsterTypeName.MUMMY]),
    new MonsterFeature(3, 'Spell caster 2', 'Has 2 random Chaos spells', [monsterTypeName.GARGOYLE, 
        monsterTypeName.DREAD_WARRIOR, monsterTypeName.ABOMINATION, monsterTypeName.MUMMY]),
    new MonsterFeature(4, 'Spell caster 3', 'Has 3 random Chaos spells', [monsterTypeName.GARGOYLE, 
        monsterTypeName.DREAD_WARRIOR, monsterTypeName.ABOMINATION, monsterTypeName.MUMMY])

];