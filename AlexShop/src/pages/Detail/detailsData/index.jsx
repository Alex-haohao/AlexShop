import React from "react"
import api from "../../../api"
import DetailsView from './detailsView'

export default class DetailData extends React.Component{

    constructor(props){
        super(props)
        this.state={
            detailsData:{},
            comment:[]
        }
    }

    componentDidMount(){
        api.comment.comment(this.props.id).then(res=>res.json()).then(
            data=>{
                this.setState({
                    comment:data.data
                })
                console.log(data)
            }
        )


        api.details.details(this.props.id).then(res=>res.json()).then(
            data=>{
                this.setState({
                    detailsData:data
                })
            }
        )
    }

    render(){
        return(
            <div>

            {
                this.state.detailsData && this.state.comment? <DetailsView data={this.state.detailsData} comment = {this.state.comment}/> :
                <div>Loading ......</div>
            }
            </div>
        )
    }
}