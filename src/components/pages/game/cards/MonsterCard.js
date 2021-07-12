import React, {useEffect, useState} from 'react';
import {Box, Card, CardActionArea, CardContent, LinearProgress, Typography, withStyles} from "@material-ui/core";
import {HealthBar} from "./StatBar";

export const MonsterCard = props => {
    const {classes} = props;

    const onCardClick = () => props.onClick && props.onClick();

    return (
        <Card>
            <CardActionArea onClick={onCardClick}>
                <CardContent>
                    <Typography variant="h6" gutterBottom>
                        {props.monster.name}
                    </Typography>
                    <Box clone height={25}>
                        <HealthBar
                            value={props.monster.health}
                            max={props.monster.maxHealth}
                        />
                    </Box>
                </CardContent>
                <img
                    src={props.monster.image}
                    width="100%"
                    alt="monster"
                />
            </CardActionArea>
        </Card>
    );
};