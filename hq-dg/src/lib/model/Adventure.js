import { AreaType, Room, Corridor } from "./Area.js";

export class Adventure {
    constructor(id, createdDate = new Date(), description = '', adventureProgress = new AdventureProgress()) {
        this.id = id;
        this.createdDate = createdDate;
        this.description = description;
        this.adventureProgress = adventureProgress;
    }

    startingRoom() {
        const room = new Room('Starting room', true, [], [], null);
        this.adventureProgress.areas.push(room);
        return room;
    }

    nextArea(areaType) {
        if (areaType == AreaType.CORRIDOR) {
            return this.nextCorridor();
        } else if (areaType == AreaType.ROOM) {
            return this.nextRoom();
        }
    }

    nextRoom() {
        const room = new Room('A new room', false, [], [], null);
        this.adventureProgress.areas.push(room);
        return room;
    }

    nextCorridor() {
        const corridor = new Corridor('A new corridor', [], null, null);
        this.adventureProgress.areas.push(corridor);
        return corridor;
    }
}

export class AdventureProgress {
    constructor(areas = [], discoveredFurniture = [], discoveredMonsters = [], milestoneLevel = 0) {
        this.milestoneLevel = milestoneLevel;
        this.areas = areas;
        this.discoveredFurniture = discoveredFurniture;
        this.discoveredMonsters = discoveredMonsters;
    }
}

