import React from "react"
import DetailsData from './detailsData'

export default class Detail extends React.Component{

    render(){
        const id = this.props.match.params.id
        return(
            <div>
               <DetailsData id = {id} history={ this.props.history }/>
            </div>
        )
    }
}