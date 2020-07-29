import React from "react"
import { Route, HashRouter, Switch } from "react-router-dom"

import Home from "../pages/Home"
import Life from "../pages/Life"
import Mine from "../pages/Mine"
import Shop from "../pages/Shop"
import Figures from "../pages/Figures"
import NotFound from "../pages/NotFound"
import App from "../pages/app"
import Search from "../pages/Search"
import Detail from "../pages/Detail"
import SignupPage from '../pages/SignUp/signupPage'
import LoginPage from '../pages/Login/loginPage'
import ShoppingCar from '../pages/ShoppingCar'

export default class AppRouter extends React.Component {
    render() {
        return (
            <HashRouter>
                <App path ="/"> 
                <Switch>

                    <Route exact path="/" component={Home}></Route>
                    <Route path="/life" component={Life}></Route>
                    <Route path="/shop" component={Shop}></Route>
                    <Route path="/mine" component={Mine}></Route>
                    <Route path="/shoppingcar" component={ShoppingCar}></Route>

                    <Route path="/signup" component = {SignupPage}></Route> 
                    <Route path="/login" component = {LoginPage}></Route>

                    <Route path="/figures" component={Figures}></Route>
                    <Route path="/search/:content" component={Search}></Route>
                    <Route path="/details/:id" component={Detail}></Route>
                    {/* <Route path="/login" component={Login}></Route> */}
                    <Route path="*" component={NotFound}></Route>
                </Switch>
                </App>
            </HashRouter>
        )
    }
}