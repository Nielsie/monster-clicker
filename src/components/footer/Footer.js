import React from 'react';
import { indigo } from '@material-ui/core/colors';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';

const styles = {
    root: {
        width: '100%',
        height: '100%',
    },
    topFooter: {
        height: '20%',
        background: indigo[300],
    },
    bottomFooter: {
        height: '80%',
        background: indigo[500],
    },
};

const Footer = (props) => {
    const classes = props.classes;
    return (
        <div className={classes.root}>
            <Paper square className={classes.topFooter}>
            </Paper>
            <Paper square className={classes.bottomFooter}>
            </Paper>
        </div>
    );
}

Footer.displayName = 'Footer';
export default withStyles(styles)(Footer);
