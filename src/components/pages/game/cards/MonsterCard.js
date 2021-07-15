import React, {useEffect, useState} from 'react';
import {Box, Card, CardActionArea, CardContent, Typography} from "@material-ui/core";
import {HealthBar} from "../stats/HealthBar";

export const MonsterCard = props => {
    const onCardClick = () => props.onClick && props.onClick();

    return (
        <Card>
            <CardActionArea onClick={onCardClick}>
                <CardContent>
                    <Typography variant="h6" gutterBottom>
                        {props.name}
                    </Typography>
                    <Box clone height={25}>
                        <HealthBar
                            value={props.health}
                            max={props.maxHealth}
                        />
                    </Box>
                </CardContent>
                <img
                    src={props.image}
                    width="100%"
                    alt="monster"
                />
            </CardActionArea>
        </Card>
    );
};