import axios from 'axios'
import setAuthorizationToken from '../components/utils/setAuthorizationToken'
import {SET_CURRENT_USER} from '../constans/users'
import jwtDecode from "jwt-decode"

export const setCurrentUser = (user)=>{
    return {
        type:SET_CURRENT_USER,
        user
    }
}

export const logout = () =>{
    return dispatch =>{
        localStorage.removeItem("jwtToken");
        setAuthorizationToken(false);
        dispatch(setCurrentUser({}))
    }
}

export const login = (data) =>{
    return dispatch =>{
        return axios.post("/api/auth",data).then(res =>{
            const token = res.data
            localStorage.setItem('jwtToken',token)
            setAuthorizationToken(token)
            dispatch(setCurrentUser(jwtDecode(token)))
        })
    }
}
