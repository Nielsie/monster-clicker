import React, {useEffect, useState} from 'react';
import {Box, Card, CardContent, Typography} from "@material-ui/core";
import {getImage} from "../../../../utils/imageUtils";

export const PlayerCard = props => {
    return (
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
    );
};
