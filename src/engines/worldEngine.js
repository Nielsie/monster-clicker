import {DICE} from "../utils/dice";
import {getImage} from "../utils/imageUtils";

const WORLDS = [
    {name: 'Forest', image: getImage('images/environments/forest.jpg'), thumbnail: getImage('images/environments/forest-thumb.jpg')},
    {name: 'Plain', image: getImage('images/environments/plains.jpg'), thumbnail: getImage('images/environments/plains-thumb.jpg')},
    {name: 'Swamp', image: getImage('images/environments/swamp.jpg'), thumbnail: getImage('images/environments/swamp-thumb.jpg')},
    {name: 'Mountain', image: getImage('images/environments/mountain.jpg'), thumbnail: getImage('images/environments/mountain-thumb.jpg')},
    {name: 'Island', image: getImage('images/environments/island.jpg'), thumbnail: getImage('images/environments/island-thumb.jpg')},
];

const createWorld = (level) => {
    const world = WORLDS[DICE.random(0, WORLDS.length)];
    return {
        ...world,
        level,
        progress: 0,
    };
};

export const WORLD_ENGINE = {
    createWorld,
};