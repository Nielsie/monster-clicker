import React from 'react';
import {Route, Switch, withRouter} from "react-router-dom";
import Home from "./components/pages/home/Home";
import Game from "./components/pages/game/Game";


const App = () => {
    return (
        <div>
            <Switch>
                <Route exact path='/' component={Home}/>

                {/*<Route path='/home' component={Home}/>
                <Route path='/newgame' component={NewGame}/>*/}
                <Route path='/game' component={Game}/>

                <Route exact path='*' component={Home}/>
            </Switch>
        </div>
    );
};

export default App;
