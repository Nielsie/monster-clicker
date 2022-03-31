import {withRouter} from "react-router";
import {AppBar, Toolbar, Typography} from "@mui/material";

export const Header = withRouter((props) => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" color="inherit">
                    Monster Clicker
                </Typography>
            </Toolbar>
        </AppBar>
    );
});