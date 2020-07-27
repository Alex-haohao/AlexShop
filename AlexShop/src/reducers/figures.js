
import * as figureAcitons from "../constans/figures"

const initState ={

}

export default function figure(state = initState,action){
    switch(action.type){
        case figureAcitons.INIT_FIGURE:
            return state = action.data;
        case figureAcitons.UPDATE_FIGURE:
            return state = action.data
        default:
            return state
    }

}