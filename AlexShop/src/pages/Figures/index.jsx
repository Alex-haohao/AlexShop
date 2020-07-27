import React from "react"
import FigureHeader from "../../components/Header"
import CurrentFigure from './CurrentFigure'
import HotType from "./HotTypes"
import {connect} from 'react-redux'
import * as figureActions from '../../actions/figures'
import {bindActionCreators}from 'redux'

class Figures extends React.Component {
    onFigureNameHandler =(figureName)=>{
        this.props.figureActions.updateFigure({figureName:figureName})
        window.history.back(-1)
        localStorage.setItem("figure",figureName)
    }
    render() {
        return (
            <div>
            <FigureHeader title ="Figure Type"/>
            <CurrentFigure figure={this.props.figure.figureName}/>
            <HotType figureNameHandler = {this.onFigureNameHandler}/>
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        figure:state.figure
    }
}

function mapDispatchToProps (dispatch){
    return{
        figureActions:bindActionCreators(figureActions,dispatch)
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Figures)