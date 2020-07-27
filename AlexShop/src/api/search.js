import base from "./base"
import { getData } from "../utils/http"

const search = {
    search(figure,content,page){
        return getData(base.search+"?figure="+figure+"&content="+content+"&page="+page);
    }
}

export default search;