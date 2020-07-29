import base from "./base"
import { getData,postData } from "../utils/http"

const shopcar = {
    sendShopcar(data){
        return postData(base.shopcar,data);
    }
    ,
    checkShoppingcarOneItem(user){
        return getData(base.checkshopcar+"?user="+user)
    }
,
    deleteshoppingcarOneItem(user,shopid){
        return getData(base.deleteshopcar+"?user="+user+"&shopid="+shopid)
    }

}

export default shopcar;