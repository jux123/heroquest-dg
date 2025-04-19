
export class Monster {
    constructor(monsterType, features = [], category) {
        this.monsterType = monsterType;
        this.features = features;
        this.category = category;
    }
    
}

export class MonsterType {
  constructor(tier, monsterTypesName, move, attack, defense, body, mind) {
    this.tier = tier;
    this.monsterTypesName = monsterTypesName;
    this.move = move;
    this.attack = attack;
    this.defense = defense;
    this.body = body;
    this.mind = mind;
  }
}

export class MonsterFeature {
  constructor(tier, name, description, monsterTypeNames = []) {
    this.tier = tier;
    this.name = name;
    this.description = description;
    this.monsterTypeNames = monsterTypeNames;
  }
}

export const monsterTypeName = {
    GOBLIN: 'Goblin',
    SKELETON: 'Skeleton',
    ZOMBIE: 'Zombie',
    ORC: 'Orc',
    MUMMY: 'Mummy',
    ABOMINATION: 'Abomination',
    DREAD_WARRIOR: 'Dread Warrior',
    GARGOYLE: 'Gargoyle'
};