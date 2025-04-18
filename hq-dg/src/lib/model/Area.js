import { rollD10 } from "../service/utils.js";

export class Area {
    constructor(type) {
        if (new.target === Area) {
            throw new Error('Area is an abstract class and cannot be instantiated directly.');
        }

        this.type = type;
    }

    setNumberOfDoors() {
        let result = null;
        switch (rollD10()) {
            case 1:
                result = 0;
                break;
            case 2: case 3: case 4: case 5: case 6: case 7:
                result = 1;
                break;
            default:
                result = 2;
        }

        if (this.type === AreaType.FIRST_ROOM && result === 0) {
            return this.setNumberOfDoors();
        }

        return result;
    }
}

export class Corridor extends Area {
    constructor(description, monsters = [], blockedDistance = null, encounter = null) {
        super(AreaType.CORRIDOR);
        this.numberOfDoors = super.setNumberOfDoors();
        this.description = description;
        this.monsters = monsters;
        this.blockedDistance = blockedDistance;
        this.encounter = encounter;
    }
}


export class Room extends Area {
    constructor(description, isFirstRoom, monsters = [], furniture = [], encounter = null) {
        super(isFirstRoom ? AreaType.FIRST_ROOM : AreaType.ROOM);
        this.numberOfDoors = super.setNumberOfDoors();
        this.description = description;
        this.monsters = monsters;
        this.furniture = furniture;
        this.encounter = encounter;
    }

    setNumberOfDoors() {
        switch (rollD10) {
            case 1:
                this.numberOfDoors = 0;
                break;
            case 2: case 3: case 4: case 5: case 6: case 7:
                this.numberOfDoors = 1;
                break;
            default:
                this.numberOfDoors = 2;
        }
    }
}


export const blockedDistance = {
    NEAR: 'Near',
    FAR: 'Far'
}

export const AreaType = {
    CORRIDOR: 'Corridor',
    ROOM: 'Room',
    FIRST_ROOM: 'First room'
}