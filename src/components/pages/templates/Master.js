import React from 'react';
import {withStyles} from "@material-ui/core";
import Header from "../../header/Header";
import Footer from "../../footer/Footer";

const footerHeight = 0;
const styles = theme => ({
    main: {
        padding: theme.spacing(2),
        paddingBottom: footerHeight,
    },
    footer: {
        position: 'absolute',
        right: 0,
        bottom: 0,
        left: 0,
        height: footerHeight,
    },
});

const Master = (props) => {
    const {classes} = props;

    return (
        <div>
            <Header title={props.title}/>
            <div className={classes.main}>
                {props.children}
            </div>
            <div className={classes.footer}>
                <Footer/>
            </div>
        </div>
    );
};

Master.displayName = 'Master';
export default withStyles(styles)(Master);
