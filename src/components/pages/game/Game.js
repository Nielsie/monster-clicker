import React, {useEffect, useState} from 'react';
import {Grid} from "@material-ui/core";
import {PlayerCard} from "./cards/PlayerCard";
import {MonsterCard} from "./cards/MonsterCard";
import {getImage} from "../../../utils/imageUtils";

export const Game = props => {
    const [player, setPlayer] = useState({
        name: 'Gelart of Livia',
        image: getImage('images/player/male01.png'),
        gold: 0,
    })

    const [monster, setMonster] = useState({
        name: 'Goblin',
        image: getImage('images/creatures/goblin01.png'),
        health: 20,
        maxHealth: 20,
        bounty: 1,
    });

    useEffect(() => {
        if (monster.health < 0) {
            setPlayer(current => ({
                ...current,
                gold: current.gold + 1,
            }));

            setMonster(() => ({
                name: 'Goblin',
                image: getImage('images/creatures/goblin01.png'),
                health: 20,
                maxHealth: 20,
                bounty: 1,
            }));
        }
    }, [monster]);

    const onMonsterClick = () => setMonster(current => ({
        ...current,
        health: current.health - 1,
    }));

    return (
        <Grid container spacing={2}>
            <Grid item xs={12} md={6} lg={4}>
                <PlayerCard
                    player={player}
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