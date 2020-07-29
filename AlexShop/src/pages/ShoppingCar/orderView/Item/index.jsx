import React from 'react'
import './style.less'
import api from "../../../../api"

export default class Item extends React.Component {

    constructor(){
        super();
        
    }

    componentDidMount(){
      
    }

    delethandler=(e)=>{
        e.preventDefault()
        const data = this.props.data;

        api.shopcar.deleteshoppingcarOneItem(this.props.user,data.itemid)
        
window.location.reload(); 
    }




    render() {
        const data = this.props.data;
        console.log(data)
        return (
            <div className="clear-fix order-item-container">
                <div className="order-item-img float-left">
                    <img src={data.img} />
                </div>
               
                <div className="order-item-content">
                    <span>name：{data.itemid}</span>
                    <span>type：{data.figuretype}</span>
                    <span>price：{data.price}</span>
                    <button className="btn btn-primary" onClick={this.delethandler}>delete</button>
                </div>
             
            </div>
        )
    }
}
