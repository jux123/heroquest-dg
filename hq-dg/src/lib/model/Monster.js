class Monster {
    constructor(monsterType, feature) {
        this.monsterType = monsterType;
        this.feature = feature;
    }
    
}

class MonsterType {
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

class MonsterFeature {
  constructor(name, description, monsterTypesName = []) {
    this.name = name;
    this.description = description;
    this.monsterTypes = monsterTypes;
  }
}

const monsterTypesName = {
    GOBLIN: 'Goblin',
    ORC: 'Orc',
    SKELETON: 'Skeleton'
};