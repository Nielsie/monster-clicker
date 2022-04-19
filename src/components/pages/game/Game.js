import React, {useEffect, useState} from 'react';
import {MonsterCard} from "./cards/MonsterCard";
import {getImage} from "../../../utils/imageUtils";
import {MONSTER_ENGINE} from "../../../engines/monsterEngine";
import {
    Box,
    Button,
    Grid,
    Stack,
} from "@mui/material";
import {MonsterSlider} from "./animations/MonsterSlider";
import {TitleCard} from "./cards/TitleCard";
import {WORLD_ENGINE} from "../../../engines/worldEngine";
import {useTheme} from "@mui/styles";
import {values} from "ramda";
import {useGameLoop} from "./useGameLoop";
import {GearIconButton} from "./buttons/GearIconButton";

const GEAR_TYPES = {
    WEAPON: 'WEAPON',
    FEAT: 'FEAT',
};

const gameDefaults = {
    world: WORLD_ENGINE.createWorld(1),
    player: {
        name: 'Gelart of Livia',
        image: getImage('images/player/male01.png'),
        damage: 1,
        gold: 0,
        gear: {
            weapon: {id: 'SHORT_SWORD', name: 'Short sword', damage: 1, tier: 1, cooldown: -1, type: GEAR_TYPES.WEAPON, image: getImage('images/resources/weapons/sword01.png')},
            feat1: {id: 'MAGIC_MISSILE', name: 'Magic Missile', damage: 5, tier: 1, cooldown: 4000, type: GEAR_TYPES.MAGIC, image: getImage('images/resources/magic/magicmissile01.png')},
            feat2: null,
            feat3: null,
            feat4: null,
        },
    },
    monster: MONSTER_ENGINE.spawn(1),
};

export const Game = props => {
    const theme = useTheme();
    const deltaTime = useGameLoop();

    const [world, setWorld] = useState(gameDefaults.world);
    const [player, setPlayer] = useState(gameDefaults.player);
    const [monster, setMonster] = useState(gameDefaults.monster);

    useEffect(() => {
        //console.log(deltaTime);
    });

    useEffect(() => {
        if (monster.health <= 0) {
            setPlayer(current => ({
                ...current,
                gold: current.gold + 1,
            }));

            if (world.progress + 1 < 10) {
                setWorld(current => ({
                    ...current,
                    progress: current.progress + 1,
                }));
            } else {
                setWorld(current => WORLD_ENGINE.createWorld(current.level + 1));
            }
        }
    }, [monster]);

    const onMonsterClick = () => setMonster(MONSTER_ENGINE.doDamage(player.damage));
    const onMonsterDead = () => {
        setMonster(() => MONSTER_ENGINE.spawn(world.level));
    };

    const onGearIconClick = damage => () => setMonster(MONSTER_ENGINE.doDamage(damage));

    return (
        <Grid container spacing={2}>
            <Grid item xs={12} md={6} lg={4}>
                <Stack direction="column" spacing={2}>
                    <TitleCard
                        image={player.image}
                        backgroundImage={world.thumbnail}
                        title={player.name}
                        subtitle={`${player.gold} Gold`}
                    >
                        <Stack direction="row" spacing={1} alignItems="flex-start">
                            <Box display="flex" flexDirection="row" flexWrap="wrap">
                                {values(player.gear).map(gear => gear && (
                                    <GearIconButton
                                        key={gear.id}
                                        title={`${gear.name} (Tier ${gear.tier}) does ${gear.damage} ${gear.cooldown > 0 ? '' : 'click '}damage`}
                                        cooldown={gear.cooldown}
                                        image={gear.image}
                                        deltaTime={deltaTime}
                                        onClick={onGearIconClick(gear.damage)}
                                    />
                                ))}
                            </Box>
                            <Button variant="contained" size="small">Shop</Button>
                        </Stack>
                    </TitleCard>
                </Stack>
            </Grid>
            <Grid item xs={12} md={6} lg={8}>
                <Stack direction="column" spacing={2}>
                    <TitleCard
                        background={theme.palette.primary.main}
                        color={theme.palette.primary.contrastText}
                        title={`Level ${world.level} - ${world.name}`}
                        subtitle={`Killed ${world.progress} out of 10`}
                    />
                    <MonsterSlider
                        in={monster.health > 0}
                        direction={monster.health > 0 ? 'up' : 'left'}
                        onExited={onMonsterDead}
                    >
                        <MonsterCard
                            name={monster.name}
                            image={monster.image}
                            backgroundImage={world.image}
                            health={monster.health}
                            maxHealth={monster.maxHealth}
                            onClick={onMonsterClick}
                        />
                    </MonsterSlider>
                </Stack>
            </Grid>
        </Grid>
    );
};