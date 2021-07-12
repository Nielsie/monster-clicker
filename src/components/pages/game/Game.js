import React, {useEffect, useState} from 'react';
import {Grid} from "@material-ui/core";
import {PlayerCard} from "./cards/PlayerCard";
import {MonsterCard} from "./cards/MonsterCard";
import {getImage} from "../../../utils/imageUtils";

export const Game = props => {
    const [monster, setMonster] = useState({
        name: 'Goblin',
        image: getImage('images/creatures/goblin01.png'),
        health: 20,
        maxHealth: 20,
    });


    const onMonsterClick = () => setMonster(monster => ({
        ...monster,
        health: monster.health - 1,
    }));

    return (
        <Grid container spacing={2}>
            <Grid item xs={12} md={6} lg={4}>
                <PlayerCard
                    name="Geralt of Rivia"
                    image={getImage('images/player/male01.png')}
                />
            </Grid>
            <Grid item xs={12} md={6} lg={8}>
                <MonsterCard
                    monster={monster}
                    onClick={onMonsterClick}
                />
            </Grid>
        </Grid>
    );
};