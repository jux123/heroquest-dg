class Adventure {
    constructor(id, createdDate = new Date(), description = '', adventureProgress = new AdventureProgress()) {
        this.id = id;
        this.createdDate = createdDate;
        this.description = description;
        this.adventureProgress = adventureProgress;
    }
}

class AdventureProgress {
    constructor(areas = [], discoveredFurniture = [], discoveredMonsters = []) {
        this.areas = areas;
        this.discoveredFurniture = discoveredFurniture;
        this.discoveredMonsters = discoveredMonsters;
    }
}