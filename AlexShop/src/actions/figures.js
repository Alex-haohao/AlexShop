import * as figureActions from "../constans/figures"

export  function initFigure(data){
    return{
        type:figureActions.INIT_FIGURE,
        data
    }
}

export  function updateFigure(data){
    return{
        type:figureActions.UPDATE_FIGURE,
        data
    }
}