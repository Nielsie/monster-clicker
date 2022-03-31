import React, {useEffect, useState} from 'react';
import {PlayerCard} from "./cards/PlayerCard";
import {MonsterCard} from "./cards/MonsterCard";
import {getImage} from "../../../utils/imageUtils";
import {MONSTER_ENGINE} from "../../../engines/monsterEngine";
import {Grid, Stack} from "@mui/material";
import {MonsterSlider} from "./animations/MonsterSlider";

export const Game = props => {
    const [player, setPlayer] = useState({
        name: 'Gelart of Livia',
        image: getImage('images/player/male01.png'),
        damage: 1,
        gold: 0,
    })

    const [monster, setMonster] = useState(MONSTER_ENGINE.spawn());

    useEffect(() => {
        if (monster.health <= 0) {
            setPlayer(current => ({
                ...current,
                gold: current.gold + 1,
            }));
        }
    }, [monster]);

    const onMonsterClick = () => setMonster(MONSTER_ENGINE.doDamage(player.damage));
    const onMonsterDead = () => {
        console.log('Monster is dead, spawn new one');
        setMonster(MONSTER_ENGINE.spawn);
    };

    return (
        <Grid container spacing={2}>
            <Grid item xs={12} md={6} lg={4}>
                <Stack direction="column" spacing={2}>
                    <PlayerCard
                        name={player.name}
                        image={player.image}
                        gold={player.gold}
                    />
                </Stack>
            </Grid>
            <Grid item xs={12} md={6} lg={8}>
                <MonsterSlider
                    in={monster.health > 0}
                    direction={monster.health > 0 ? 'up' : 'left'}
                    onExited={onMonsterDead}
                >
                    <MonsterCard
                        name={monster.name}
                        image={monster.image}
                        health={monster.health}
                        maxHealth={monster.maxHealth}
                        onClick={onMonsterClick}
                    />
                </MonsterSlider>
            </Grid>
        </Grid>
    );
};