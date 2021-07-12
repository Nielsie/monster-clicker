import React, {useEffect, useState} from 'react';
import {Box, Card, CardActionArea, CardContent, LinearProgress, Typography} from "@material-ui/core";
import {getImage} from "../../../../utils/imageUtils";

export const MonsterCard = props => {
    return (
        <Card>
            <CardActionArea>
                <CardContent>
                    <Typography variant="h6" gutterBottom>
                        Goblin
                    </Typography>
                    <Box clone height={25}>
                        <LinearProgress
                            variant="determinate"
                            value={100}
                            classes={{
                                root: classes.root,
                                colorPrimary: classes.healthColor,
                                barColorPrimary: classes.healthColorBar,
                            }}
                        />
                    </Box>
                </CardContent>
                <img
                    src={getImage('images/creatures/goblin01.png')}
                    width="100%"
                    alt="monster"
                />
            </CardActionArea>
        </Card>
    );
};