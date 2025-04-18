import {  Adventure } from '../model/Adventure.js';
import { AreaType } from '../model/Area.js';

export const newAdventure = () => {
    const adventure = new Adventure('123', new Date(), 'A new adventure', {
        areas: [],
        discoveredFurniture: [],
        discoveredMonsters: []
    });

    console.log("Adventure created:", adventure);
    return adventure;
}

const adventure = newAdventure();

let nextArea = adventure.startingRoom();

console.log("Starting room:", nextArea);

nextArea = adventure.nextArea(AreaType.CORRIDOR);

console.log("Next area:", nextArea);

nextArea = adventure.nextArea(AreaType.ROOM);

console.log("Next area:", nextArea);

console.log("Adventure progress:", adventure.adventureProgress);