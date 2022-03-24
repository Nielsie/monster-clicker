import {getImage} from "../utils/imageUtils";

const spawn = () => {
    return {
        name: 'Goblin',
        image: getImage('images/creatures/goblin01.png'),
        health: 10,
        maxHealth: 10,
        bounty: 1,
    };
};

const doDamage = damage => monster => ({
    ...monster,
    health: monster.health - damage,
});

export const MONSTER_ENGINE = {
    spawn,
    doDamage,
};