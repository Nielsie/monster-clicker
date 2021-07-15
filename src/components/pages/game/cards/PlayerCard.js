import React, {useEffect, useState} from 'react';
import {Box, Card, CardContent, Typography} from "@material-ui/core";

export const PlayerCard = props => {
    return (
        <Card>
            <Box display="flex">
                <img
                    src={props.image}
                    width={120}
                    height={120}
                    alt="player"
                />
                <CardContent>
                    <Typography component="h6" variant="h6">
                        {props.name}
                    </Typography>
                    <Typography component="body2">
                        {`${props.gold} gold`}
                    </Typography>
                </CardContent>
            </Box>
        </Card>
    );
};
