import React, {useEffect, useState} from 'react';
import {MonsterCard} from "./cards/MonsterCard";
import {getImage} from "../../../utils/imageUtils";
import {MONSTER_ENGINE} from "../../../engines/monsterEngine";
import {
    Box,
    Button,
    Card,
    CardActionArea,
    CardMedia,
    Grid,
    Stack,
    Tooltip
} from "@mui/material";
import {MonsterSlider} from "./animations/MonsterSlider";
import {TitleCard} from "./cards/TitleCard";
import {WORLD_ENGINE} from "../../../engines/worldEngine";
import {useTheme} from "@mui/styles";
import {values} from "ramda";
import {useGameLoop} from "./useGameLoop";

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
            weapon: {id: 'SHORT_SWORD', name: 'Short sword', damage: 1, tier: 1, type: GEAR_TYPES.WEAPON, image: getImage('images/resources/weapons/sword01.png')},
            feat1: {id: 'MAGIC_MISSILE', name: 'Magic Missile', damage: 5, tier: 1, cooldown: 4, cooldownMax: 4, type: GEAR_TYPES.MAGIC, image: getImage('images/resources/magic/magicmissile01.png')},
            feat2: null,
            feat3: null,
            feat4: null,
        },
    },
    monster: MONSTER_ENGINE.spawn(1),
};

const renderGearIcon = gear => gear && (
    <Box key={gear.id} clone mr={0.5} mb={0.5}>
        <Tooltip title={`${gear.name} (Tier ${gear.tier}) does ${gear.damage} damage`} placement="top-start" arrow>
            <Card>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height={32}
                        width={32}
                        image={gear.image}
                    />
                </CardActionArea>
            </Card>
        </Tooltip>
    </Box>
)

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

    return (
        <Grid container spacing={2}>
            <Grid item xs={12} md={6} lg={4}>
                <Stack direction="column" spacing={2}>
                    <TitleCard
                        image={player.image}
                        title={player.name}
                        subtitle={`${player.gold} Gold`}
                    >
                        <Stack direction="row" spacing={1} alignItems="flex-start">
                            <Box display="flex" flexDirection="row" flexWrap="wrap">
                                {values(player.gear).map(renderGearIcon)}
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
                        /*image={player.image}*/
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