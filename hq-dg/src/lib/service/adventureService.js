import { Adventure } from '../model/Adventure.js';
import { AreaType } from '../model/Area.js';
import { difficulties } from '../service/utils.js';

export const newAdventure = (numberOfPlayers, difficulty) => {
    const adventure = new Adventure('123', new Date(), 'A new adventure');

    console.log("Adventure created:", adventure);
    return adventure;
}

const adventure = newAdventure(3, difficulties.MEDIUM);

let nextArea = adventure.startingRoom();

console.log("Starting room:", nextArea);

adventure.adventureProgress.milestoneLevel = 1;

nextArea = adventure.nextArea(AreaType.CORRIDOR);

console.log("Next area:", nextArea);

nextArea = adventure.nextArea(AreaType.ROOM);

console.log("Next area:", nextArea);

console.log("Adventure progress:", adventure.adventureProgress);