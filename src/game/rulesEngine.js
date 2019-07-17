import {ABILITIES} from "../utils/constants";

const maxHealth = entity => Math.floor((entity.abilities[ABILITIES.STRENGTH] + entity.abilities[ABILITIES.ENDURANCE]) / 5);
const maxMana = entity => Math.floor((entity.abilities[ABILITIES.WILLPOWER] * 2) / 5);

export const RULES = {
    maxHealth,
    maxMana,
};
