import {red} from "@material-ui/core/colors";
import {withStyles} from "@material-ui/core";
import {StatBar} from "./StatBar";

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