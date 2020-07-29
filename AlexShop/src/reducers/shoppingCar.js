import * as shoppingAction from "../constans/shoppingCar"

const initState = [];

export default function shoppingCar(state = initState, action) {
    switch (action.type) {
        case shoppingAction.ADDCAR:
            state.push(action.data)
            return state;
        case shoppingAction.REMOVECAR:
            return state.filter((element) => {
                if (element.id !== action.data.id) {
                    return element;
                }
            })
        default:
            return state;
    }
}