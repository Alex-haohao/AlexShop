import {combineReducers} from 'redux'
import figure from "./figures"
import auth from "./auth";
import flashMessages from './flashMessages'
import collect from "./collect"
import shopping from "./shoppingCar"


const rootReducers = combineReducers({figure, auth,flashMessages,collect,shopping})

export default rootReducers