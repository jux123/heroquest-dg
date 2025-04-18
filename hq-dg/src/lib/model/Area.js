class Area {
    constructor() {
        throw new Error('Area is an abstract class and cannot be instantiated directly.');
    }
}

class Corridor extends Area {
    constructor(description, numberOfDoors, monsters = [], blockedDistance = null, encounter = null) {
        super();
        this.description = description;
        this.numberOfDoors = numberOfDoors;
        this.monsters = monsters;
        this.blockedDistance = blockedDistance;
        this.encounter = encounter;
    }
}


class Room extends Area {
    constructor(description, numberOfDoors, monsters = [], furniture = [], encounter = null) {
        super();
        this.description = description;
        this.numberOfDoors = numberOfDoors;
        this.monsters = monsters;
        this.furniture = furniture;
        this.encounter = encounter;
    }
}

const blockedDistance = {
    NEAR,
    FAR
}