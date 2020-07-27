import base from "./base"
import { getData } from "../utils/http"

const details = {
    details(id){
        return getData(base.details+"?id="+id);
    }
}

export default details;