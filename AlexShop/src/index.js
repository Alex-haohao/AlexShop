import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from "./router/AppRouter"
import "./static/css/common.less"
import "./static/css/font.css"
import "./static/css/iconfont.css"

import Navgationbar from './pages/SignUp/navigationbar'
import FlashMessagesList from './components/flash/flashMessagesList'
import setAuthorizationToken from './components/utils/setAuthorizationToken'
import { setCurrentUser} from './actions/login'
import jwtDecode from "jwt-decode"


import { Provider } from "react-redux"
import configureStore from "./store"

const store = configureStore()

if(localStorage.jwtToken){
    setAuthorizationToken(localStorage.jwtToken);
    store.dispatch(setCurrentUser(jwtDecode(localStorage.jwtToken)))
  }
  

ReactDOM.render(
    <Provider store={store}>
        
        <AppRouter>
        <Navgationbar/>

        <FlashMessagesList/>
            
        </AppRouter>
    </Provider>

    , document.getElementById('root'));