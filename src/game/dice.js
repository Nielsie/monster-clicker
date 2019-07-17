import range from "ramda/es/range";

//The maximum is exclusive and the minimum is inclusive
const getRandomArbitrary = (min, max) => {
    return Math.random() * (max - min) + min;
};

//The maximum is exclusive and the minimum is inclusive
const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
};

const rollDice = (die, amount = 1) => range(0, amount).map(roll => getRandomInt(1, die)).reduce((sum, roll) => sum + roll, 0);

export const DICE = {
    rollDice,
    d3: (amount = 1) => rollDice(3, amount),
    d4: (amount = 1) => rollDice(4, amount),
    d6: (amount = 1) => rollDice(6, amount),
    d8: (amount = 1) => rollDice(8, amount),
    d10: (amount = 1) => rollDice(10, amount),
    d12: (amount = 1) => rollDice(12, amount),
    d20: (amount = 1) => rollDice(20, amount),
    d100: (amount = 1) => rollDice(100, amount),
};
