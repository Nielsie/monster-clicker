import React, {useEffect, useState} from 'react';
import {Box, Card, CardActionArea, CardContent, Grid, LinearProgress, Typography, withStyles} from "@material-ui/core";
import {getImage} from "../../../utils/imageUtils";
import {red} from "@material-ui/core/colors";

const styles = () => ({
    root: {
        height: 25,
    },
    healthColor: {
        backgroundColor: red[100],
    },
    healthColorBar: {
        backgroundColor: red['500'],
    },
});

export const Game = withStyles(styles)(props => {
    const {classes} = props;

    return (
        <Grid container spacing={2}>
            <Grid item xs={12} md={6} lg={4}>
                <Card>
                    <Box display="flex" justify-content="flex-start">
                        <img
                            src={getImage('images/player/male01.png')}
                            width={120}
                            height={120}
                            alt="player"
                        />
                        <CardContent>
                            <Typography component="h6" variant="h6">
                                Geralt of Rivia
                            </Typography>
                        </CardContent>
                    </Box>
                </Card>
            </Grid>
            <Grid item xs={12} md={6} lg={8}>
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
            </Grid>
        </Grid>
    );
});