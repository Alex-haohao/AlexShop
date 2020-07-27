/**
 * 首页热门和推荐接口
 */

import base from "./base"
import { getData } from "../utils/http"

const homehot = {
    homehot1Data(figure){
        return getData(base.homehot1+"?figure="+figure);
    },
    homehot2Data(figure){
        return getData(base.homehot2+"?figure="+figure);
    },
    swiperdData(){
        return getData(base.swiperimg1);
    }
}

export default homehot;