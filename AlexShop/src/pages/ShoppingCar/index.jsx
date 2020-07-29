import React from "react"
import { connect } from "react-redux" 
import OrderView from "./orderView"
import ShopCarHeader from "../../components/Header"
import api from "../../api"
import FootNav from "../../components/FootNav"
class ShopCar extends React.Component{

    constructor(){
        super();
        this.state = {
            order:[]
        }
    }

    componentWillMount(){
        const userinfo = this.props.userinfo.username
        if(userinfo){
            
            api.shopcar.checkShoppingcarOneItem(userinfo)
            .then(res =>res.json())
            .then(data => {
                this.setState({
                    order:data
                })
            })

        }else{
            this.props.history.push("/login");
        }

        
    }

    render(){
        return(
            <div>
                <ShopCarHeader title="Shopping car"/>
                {
                    this.state.order.length>0 ?
                    <OrderView data={ this.state.order } userinfo={this.props.userinfo.username}/>
                    : <div>No Item</div>
                }
                <FootNav />
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        userinfo:state.auth.user,
    }
}

export default connect(
    mapStateToProps
)(ShopCar)