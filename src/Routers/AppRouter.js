import React from 'react'
import Home from '../Pages/Home'
import About from '../Pages/About'
import Products from '../Pages/Products'
import Contact from '../Pages/Contact'
import Cart from '../Pages/Cart'
import NavBar from '../Componentes/NavBar'
import {BrowserRouter, Route, Switch} from "react-router-dom"

export default function AppRouter(){
    return(
        <BrowserRouter>
            <NavBar/>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/About" component={About}/>
                <Route exact path="/Products" component={Products}/>
                <Route exact path="/Contact" component={Contact}/>
                <Route exact path="/Cart" component={Cart}/>
            </Switch>
        </BrowserRouter>
    )
}