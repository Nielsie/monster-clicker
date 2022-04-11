import {getImage} from "../utils/imageUtils";

const spawn = (level) => {
    //health = 10 * (level-1 + 1.23^level-1) * (isBoss*10)
    const health = Math.ceil(10 * (level-1 + Math.pow(1.23, level-1)));
    //bounty = health / 15
    const bounty = Math.ceil(health / 15);
    console.log(`Creating monster with ${health} HP for ${bounty} gold bounty`);
    return {
        name: 'Goblin',
        image: getImage('images/creatures/goblin01.png'),
        health,
        maxHealth: health,
        bounty,
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