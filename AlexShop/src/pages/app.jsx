import React from 'react'
import {connect} from 'react-redux'
import  * as figureActions from '../actions/figures'
import {bindActionCreators} from 'redux'

class App extends React.Component{

    componentDidMount(){
        const figure = localStorage.getItem("figure")
        this.props.figureActions.initFigure({
            figureName:figure || "Doll"
        })
    }

    render(){

        return(
            <div>
                {this.props.children}
            </div>
        )
    }
}

 function mapDispatchToProps(dispatch){
    return{
        figureActions:bindActionCreators(figureActions,dispatch )
    }
}

 function mapStateToProps (state){
    return{
        figures:state.figure
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(App)