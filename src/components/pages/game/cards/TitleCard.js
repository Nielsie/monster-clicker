import {Box, Card, CardContent, Typography} from "@mui/material";
import React from "react";

export const TitleCard = props => {
    return (
        <Card sx={{backgroundColor: props.background || 'inherit'}}>
            <Box display="flex">
                {props.image && (
                    <Box sx={{backgroundImage:`url("${props.backgroundImage}")`}} height={160}>
                        <img
                            src={props.image}
                            width={160}
                            height={160}
                            alt="player"
                        />
                    </Box>
                )}
                <Box display="flex" flexDirection="column">
                    <CardContent sx={{color: props.color || 'inherit'}}>
                        <Typography component="h6" variant="h6">
                            {props.title}
                        </Typography>
                        <Typography variant="body2">
                            {props.subtitle}
                        </Typography>
                    </CardContent>
                    {props.children &&
                        <Box display="flex" pl={2} pr={2}>
                            {props.children}
                        </Box>
                    }
                </Box>
            </Box>
        </Card>
    );
};
