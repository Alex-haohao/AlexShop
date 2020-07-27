import React from "react"
import SearchHeader from "./SearchHeader"
import {connect} from "react-redux"
import SearchList from './SearchList'

class Search extends React.Component{


    render(){
        const content = this.props.match.params.content

        return(
            <div>
                
                <SearchHeader history = {this.props.history}/>
                <SearchList figure ={this.props.figure.figureName} 
                content ={content}/>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        figure:state.figure
    }
}

export default connect (mapStateToProps)(Search)