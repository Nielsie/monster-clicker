import React, {useEffect, useState} from 'react';
import {Header} from "./components/core/header/Header";
import {Route, Switch} from "react-router";
import {Game} from "./components/pages/game/Game";
import {Box, CssBaseline, ThemeProvider} from "@mui/material";
import { createTheme } from '@mui/material/styles'

const theme = createTheme();

export const App = props => {
    return (
        <ThemeProvider theme={theme}>
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
        </ThemeProvider>
    )
};
