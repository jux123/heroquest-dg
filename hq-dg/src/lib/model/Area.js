import { rollD10, getRandomInt } from "../service/utils.js";

export class Area {
    constructor(type) {
        if (new.target === Area) {
            throw new Error('Area is an abstract class and cannot be instantiated directly.');
        }

        this.type = type;
    }

    generateNumberOfDoors(previousNumberOfDoors) {
        let result = null;
        switch (rollD10()) {
            case 1: case 2: case 3:
                result = 0;
                break;
            case 4: case 5: case 6:
                result = 1;
                break;
            case 7: case 8: case 9:
                result = 2;
                break;
            default:
                result = 3;
        }

        if (result === 0 && previousNumberOfDoors < 2) {
            return this.generateNumberOfDoors();
        }

        return result;
    }
}

export class Corridor extends Area {
    constructor(description, monsters = [], blockedDistance = null, encounter = null, previousArea) {
        super(AreaType.CORRIDOR);
        this.numberOfDoors = super.generateNumberOfDoors(previousArea.numberOfDoors);
        this.description = description;
        this.monsters = monsters;
        this.blockedDistance = blockedDistance;
        this.encounter = encounter;
        this.previousArea = previousArea;
    }
}


export class Room extends Area {
    constructor(description, monsters = [], furniture = [], encounter = null, previousArea) {
        super(AreaType.ROOM);
        this.numberOfDoors = super.generateNumberOfDoors(previousArea.numberOfDoors);
        this.description = description;
        this.monsters = monsters;
        this.furniture = furniture;
        this.encounter = encounter;
        this.previousArea = previousArea;
    }
}

export class FirstRoom extends Area {
    constructor(description) {
        super(AreaType.FIRST_ROOM);
        this.numberOfDoors = getRandomInt(1, 3);
        this.description = description;
    }
}

export class FinalRoom extends Area {
    constructor(description, monsters = [], furniture = [], encounter = null) {
        super(AreaType.FINAL_ROOM);
        this.numberOfDoors = 0;
        this.description = description;
        this.monsters = monsters;
        this.furniture = furniture;
        this.encounter = encounter;
    }
}


export const blockedDistance = {
    NEAR: 'Near',
    FAR: 'Far'
}

export const AreaType = {
    CORRIDOR: 'Corridor',
    ROOM: 'Room',
    FIRST_ROOM: 'First room',
    FINAL_ROOM: 'Final room'
}