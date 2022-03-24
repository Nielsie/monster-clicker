import {Box, Slide} from "@mui/material";

export const MonsterSlider = props => {
    const onExited = () => props.onExited && props.onExited();
    return (
        <Slide
            in={props.in}
            direction={props.direction}
            appear
            onExited={onExited}
            easing={{
                enter: 'cubic-bezier(0.000, 0.000, 0.580, 1.000)',
                exit: 'cubic-bezier(0.420, 0.000, 1.000, 1.000)',
            }}
            timeout={{
                enter: 300,
                exit: 700,
            }}
        >
            <Box>
                {props.children}
            </Box>
        </Slide>
    );
};