import { MonsterFeature, MonsterType, monsterTypeName } from "../model/Monster.js";

export const monstersTypes = [
    new MonsterType(1, 'Goblin', 10, 2, 2, 1, 1),
    new MonsterType(1, 'Skeleton', 6, 2, 2, 1, 0),
    new MonsterType(1, 'Zombie', 5, 2, 3, 1, 0),
    new MonsterType(2, 'Orc', 8, 3, 2, 1, 2),
    new MonsterType(2, 'Mummy', 4, 3, 4, 2, 0),
    new MonsterType(3, 'Abomination', 6, 3, 3, 2, 3),
    new MonsterType(3, 'Dread Warrior', 7, 4, 4, 3, 3),
    new MonsterType(4, 'Gargoyle', 6, 4, 5, 3, 4)
    
];

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