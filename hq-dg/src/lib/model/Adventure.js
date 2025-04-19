import { AreaType, Room, Corridor, FirstRoom, FinalRoom } from "./Area.js";
import { getRoomMonsters, getWonderingMonsters } from '../service/monsterService.js';
//TODO: Area -> areaService

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
            const monsters = getWonderingMonsters(this);
            return this.nextCorridor(lastArea, monsters);
        } else if (areaType == AreaType.ROOM) {
            const monsters = getRoomMonsters(this);
            const distinctMonsterTypes = [...new Set(monsters.map(m => m.monsterType.monsterTypesName))];
            this.adventureProgress.addDiscoveredMonsterTypes(distinctMonsterTypes);
            return this.nextRoom(lastArea, monsters);
        }
    }

    nextRoom(lastArea, monsters) {
        const room = new Room('A new room', monsters, [], null, lastArea);
        this.adventureProgress.addArea(room);
        return room;
    }

    nextCorridor(lastArea, monsters) {
        const corridor = new Corridor('A new corridor', monsters, null, null, lastArea);
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

    addDiscoveredMonsterTypes(monsterTypeNames) {
        monsterTypeNames.forEach(monsterTypeName => {
            this.discoveredMonsterTypes.findIndex(m => m === monsterTypeName) === -1 && 
            this.discoveredMonsterTypes.push(monsterTypeName);
        });
    }
}

