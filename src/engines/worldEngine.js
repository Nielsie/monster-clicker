import {DICE} from "../utils/dice";

const WORLDS = [
    {name: 'Forest'},
    {name: 'Plain'},
    {name: 'Swamp'},
    {name: 'Mountain'},
    {name: 'Island'},
];

const createWorld = (level) => {
    return {
        name: WORLDS[DICE.random(0, WORLDS.length)].name,
        level,
        progress: 0,
    };
};

export const WORLD_ENGINE = {
    createWorld,
};