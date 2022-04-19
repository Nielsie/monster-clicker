import {HealthBar} from "../stats/HealthBar";
import {Box, Card, CardActionArea, CardContent, Typography, useTheme} from "@mui/material";

export const MonsterCard = props => {
    const theme = useTheme();

    const onCardClick = () => props.onClick && props.onClick();

    return (
        <Card>
            <CardActionArea
                onClick={onCardClick} disabled={props.health <= 0}
                sx={{backgroundImage: `url("${props.backgroundImage}")`}}
            >
                <CardContent>
                    <Typography variant="h6" gutterBottom color={theme.palette.primary.contrastText}>
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
                    style={props.health <= 0 ? {filter: 'opacity(0.5) grayscale(0.7)'} : {}}
                />
            </CardActionArea>
        </Card>
    );
};