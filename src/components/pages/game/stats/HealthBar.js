import {StatBar} from "./StatBar";
import {withStyles} from "@mui/styles";
import {red} from "@mui/material/colors";

const healthBarStyles = () => ({
    root: {
        height: 25,
    },
    statColor: {
        backgroundColor: red[100],
    },
    statColorBar: {
        backgroundColor: red['500'],
    },
});
export const HealthBar = withStyles(healthBarStyles)(StatBar);