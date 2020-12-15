import React from 'react'
import {Switch, Route} from 'react-router-dom'
import home from './pages/home'



function Routes(){
    return(
        <Switch>
            <Route path="/" component={home} exact/>
        </Switch>
    );
}

export default Routes