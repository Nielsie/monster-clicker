import React, {useEffect, useState} from 'react';
import {LinearProgress} from "@material-ui/core";

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
