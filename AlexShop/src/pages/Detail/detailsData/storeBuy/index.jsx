import React from "react"
import StoreBuyView from "./storeBuyView"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import * as collectActions from "../../../../actions/collect"
import api from "../../../../api"


class StoreBuy extends React.Component {
 
    constructor(){
        super();
        this.state = {
            collected:false
        }
    }

    componentDidMount(){
        this.setState({
            collected:this.isStore()
        })
    }

    storeHandler() {
        const username = this.props.userinfo;
        const goods_id = this.props.id;
        if (username) {

            if (this.isStore()) {
                this.props.collectActions.cancelCollect({
                    id:goods_id
                })
                this.setState({
                    collected:false
                })
            } else {
                this.props.collectActions.setCollect({
                    id: goods_id
                })
                this.setState({
                    collected:true
                })
            }

        } else {
            this.props.history.push("/login");
        }
    }


    isStore() {
        const id = this.props.id;
        const collects = this.props.collect;
        return collects.some((element) => {
            return element.id === id;
        })
    }


    BuyHandler() {
        console.log("购买"+JSON.stringify(this.props.data));
       const {imgs,title,price,figureType} = this.props.data
       console.log(imgs[0]+"   "+title+"   "+price+"  "+figureType)
       const data = {user:this.props.userinfo,shopid:title,figuretype:figureType,price:price,image:imgs[0]}
          
            api.shopcar.sendShopcar(data).then(res=>res.json()).then(data=>{
                if(data.error){

                    alert(data.error)
                }
                return
            }
                
               
                
            )
    }

    render() {
        return (
            <div>
                <StoreBuyView
                    collected={ this.state.collected }
                    onStoreHandler={this.storeHandler.bind(this)}
                    onBuyHandler={this.BuyHandler.bind(this)}
                />
            </div>
        )
    }
}

function mapStateTopProps(state) {
    return {
        userinfo: state.auth.user.username,
        collect: state.collect
    }
}

function mapDispatchToProps(dispatch) {
    return {
        collectActions: bindActionCreators(collectActions, dispatch) }}

export default connect(mapStateTopProps,mapDispatchToProps
)(StoreBuy)