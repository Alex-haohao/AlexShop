import base from "./base"
import { getData } from "../utils/http"

const comment = {
    comment(id){
        return getData(base.comment+"?id="+id);
    }
}

export default comment;