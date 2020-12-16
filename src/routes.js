import React from 'react'
import {Switch, Route} from 'react-router-dom'
import home from './pages/home'
import cadastro from './pages/cadastro'
import parceiros from'./pages/parceiros'
import sobre from './pages/sobre'

function Routes(){
    return(
        <Switch>
            <Route path="/" component={home} exact/>
            <Route path="/cadastro" component={cadastro}/>
            <Route component={parceiros}/>
            <Route component={sobre}/>



        </Switch>
    );
}

export default Routes