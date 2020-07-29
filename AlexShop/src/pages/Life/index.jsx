import React from "react"
import FootNav from "../../components/FootNav"
import api from "../../api"

export default class Life extends React.Component{
        shopcarhandle=(e)=>{
            const data = {user:"tixi",shopid:15777749429846732,figuretype:"doll",price:"8000",image:"http://res.hpoi.net.cn/gk/pic/n/2019/09/d70aa0a7c5c64fb58016118f2fae815d.jpeg"}
          
            api.shopcar.sendShopcar(data).then(res=>res.json()).then(data=>
                console.log(data)
            )
        }

        checkShopcarhandle=(e)=>{

            api.shopcar.checkShoppingcarOneItem("tixi").then(res=>res.json()).then(data=>
                console.log(data)
            )
        }

       deleteShopcarhandle=(e)=>{

            api.shopcar.deleteshoppingcarOneItem("tixi",15777749429846732)
            
        }
        



    render(){
        
        return(
            <div>
                <button className="btn btn-lg" onClick={this.shopcarhandle.bind(this)}>shopcar test</button>
                <button className="btn btn-lg" onClick={this.checkShopcarhandle.bind(this)}>check all shopcar test</button>
                <button className="btn btn-lg" onClick={this.deleteShopcarhandle.bind(this)}>delete one shopcar test</button>

                <FootNav />
            </div>
        )
    }
}