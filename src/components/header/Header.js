import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = {
    root: {
        width: '100%',
    },
    flex: {
        flex: 1,
    },
};

const Header = (props) => {
    const classes = props.classes;
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Typography type="title" color="inherit" className={classes.flex}>
                        {props.title}
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
}

Header.displayName = 'Header';
export default withStyles(styles)(Header);
