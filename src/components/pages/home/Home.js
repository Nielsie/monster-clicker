import React from "react";
import Master from "../templates/Master";
import {makeStyles} from '@material-ui/core/styles';
import {Link} from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

const useStyles = makeStyles(theme => ({

}));

const Home = (props) => {
    const classes = useStyles();

    return (
        <Master title="Home">
            <Typography variant="h5">Welcome to the Butcher of Blaviken!</Typography>
            <List>
                <ListItem><Link to="/game">Start New Game!</Link></ListItem>
            </List>
        </Master>
    );
};

Home.displayName = 'Home';
export default Home;
