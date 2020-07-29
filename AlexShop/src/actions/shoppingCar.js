import * as shoppingAction from "../constans/shoppingCar"

export function setCollect(data){
    return{
        type:shoppingAction.ADDCAR,
        data
    }
}

export function cancelCollect(data){
    return{
        type:shoppingAction.REMOVECAR,
        data
    }
}