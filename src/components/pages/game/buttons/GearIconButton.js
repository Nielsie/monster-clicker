import {Box, Card, CardActionArea, CardMedia, Tooltip} from "@mui/material";
import React, {useEffect, useState} from "react";
import {SkillCooldown} from "../animations/SkillCooldown";

export const GearIconButton = props => {
    const [isCooldown, setIsCooldown] = useState(false);
    const [timeElapsed, setTimeElapsed] = useState(0);

    useEffect(() => {
        if (isCooldown) {
            setTimeElapsed((current) => current + props.deltaTime);
        }
    }, [props.deltaTime, isCooldown]);

    useEffect(() => {
        if (isCooldown && timeElapsed >= props.cooldown) {
            setIsCooldown(false);
        }
    }, [isCooldown, timeElapsed, props.cooldown]);

    const handleOnClick = () => {
        if (props.cooldown <= 0) {
            props.onClick && props.onClick();
        } else if (!isCooldown) {
            setIsCooldown(true);
            setTimeElapsed(0);

            props.onClick && props.onClick();
        }
    };

    return (
        <Box clone mr={0.5} mb={0.5}>
            <Tooltip title={props.title} placement="top-start" arrow>
                <Card>
                    <CardActionArea onClick={handleOnClick} disabled={props.cooldown <= 0 || isCooldown}>
                        <SkillCooldown
                            width={32}
                            height={32}
                            percentage={timeElapsed / props.cooldown}
                            isCooldown={isCooldown}
                        />
                        <CardMedia
                            component="img"
                            height={32}
                            width={32}
                            image={props.image}
                        />
                    </CardActionArea>
                </Card>
            </Tooltip>
        </Box>
    )
};