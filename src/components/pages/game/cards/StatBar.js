import React, {useEffect, useState} from 'react';
import {LinearProgress, withStyles} from "@material-ui/core";
import {red} from "@material-ui/core/colors";

export const StatBar = props => {
    const value = props.value * 100 / props.max;
    return (
        <LinearProgress
            variant="determinate"
            value={value}
            classes={{
                root: props.classes.root,
                colorPrimary: props.classes.statColor,
                barColorPrimary: props.classes.statColorBar,
            }}
        />
    );
};

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
export const HealthBar = withStyles(healthBarStyles)(StatBar)