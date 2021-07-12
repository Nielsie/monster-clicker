import React, {useEffect, useState} from 'react';
import {Box, createTheme, CssBaseline, MuiThemeProvider} from "@material-ui/core";
import {Header} from "./components/core/header/Header";
import {Route, Switch} from "react-router";
import {Game} from "./components/pages/game/Game";

const theme = createTheme({
    typography: {
        useNextVariants: true,
    },
});

export const App = props => {
    return (
        <MuiThemeProvider theme={theme}>
            <CssBaseline/>
            <Box>
                <Header/>
                <Box p={1}>
                    <Switch>
                        <Route exact path='/' component={Game}/>
                        <Route exact path='*' component={Game}/>
                    </Switch>
                </Box>
            </Box>
        </MuiThemeProvider>
    )
};
