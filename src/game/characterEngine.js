const createNewPlayer = (id, label, type, image) => {
    const player = {
        id,
        label,
        type,
        image: `${process.env.PUBLIC_URL}/images/characters/${image}`,
        isPlayer: true,
        damage: 10,
        health: 100,
        maxHealth: 100,
        mana: 30,
        maxMana: 30,
        xp: 0,
    };

    return player;
};

const createNewEnemy = (id, label, type, image) => {
    const enemy = {
        id,
        label,
        type,
        image: `${process.env.PUBLIC_URL}/images/characters/${image}`,
        isPlayer: false,
        damage: 1,
        health: 30,
        maxHealth: 30,
        mana: 10,
        maxMana: 10,
    };

    return enemy;
};

export const CHARACTERS = {
    createNewPlayer,
    createNewEnemy,
};
