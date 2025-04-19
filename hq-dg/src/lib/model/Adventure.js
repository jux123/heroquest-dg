import { AreaType, Room, Corridor, FirstRoom, FinalRoom } from "./Area.js";

export class Adventure {
    constructor(id, numberOfPlayers, createdDate = new Date(), description = '', adventureProgress = new AdventureProgress()) {
        this.id = id;
        this.numberOfPlayers = numberOfPlayers;
        this.createdDate = createdDate;
        this.description = description;
        this.adventureProgress = adventureProgress;
    }

    startingRoom() {
        const room = new FirstRoom('Starting room');
        this.adventureProgress.addArea(room);
        return room;
    }

    nextArea(areaType) {
        const lastArea = this.adventureProgress.areas[this.adventureProgress.areas.length - 1];
        if (areaType == AreaType.CORRIDOR) {
            return this.nextCorridor(lastArea);
        } else if (areaType == AreaType.ROOM) {
            return this.nextRoom(lastArea);
        }
    }

    nextRoom(lastArea) {
        const room = new Room('A new room', [], [], null, lastArea);
        this.adventureProgress.addArea(room);
        return room;
    }

    nextCorridor(lastArea) {
        const corridor = new Corridor('A new corridor', [], null, null, lastArea);
        this.adventureProgress.addArea(corridor);
        return corridor;
    }
}

export class AdventureProgress {
    constructor(areas = [], discoveredFurniture = [], discoveredMonsterTypes = [], milestoneLevel = 0) {
        this.milestoneLevel = milestoneLevel;
        this.areas = areas;
        this.discoveredFurniture = discoveredFurniture;
        this.discoveredMonsterTypes = discoveredMonsterTypes;
    }

    addArea(area) {
        this.areas.push(area);
    }

    addDiscoveredFurniture(furniture) {
        this.discoveredFurniture.push(furniture);
    }

    addDiscoveredMonsterType(monsterTypeNames) {
        monsterTypeNames.forEach(monsterType => {
            this.discoveredMonsterTypes.findIndex(m => m === monsterType) === -1 && 
            this.discoveredMonsterTypes.push(monsterType);
        });
    }
}

