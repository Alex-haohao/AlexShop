import React from 'react'
import SignupForm from './signupForm.jsx'
import {connect} from 'react-redux'
import{bindActionCreators}  from 'redux'
import *  as signupAction from '../../actions/signupaction'
import *  as flashAction from '../../actions/flashMessage'
import Header from "../../components/Header"
import "./style.less"

class signUpPage extends React.Component{

    render(){

        if(this.props.auth.user.username){
            this.props.history.push("/")
        }
        

        return(
            <div className="loginPage"><Header title ="Login Page"/>
            <div className='row'>
                <div className="col-md-3"></div>
                <div className="col-md-6">
                    <SignupForm signupAction={this.props.signupAction}
                    flashAction = {this.props.flashAction}/>
                </div>
                <div className="col-md-3"></div>
            </div></div>

        )
        
    }

}

const mapDispatchToProps = (dispatch) =>{
    return {
        signupAction:bindActionCreators(signupAction,dispatch),
        flashAction: bindActionCreators(flashAction,dispatch)

    }
}

const mapStateToProps =(state)=>{
    return{
        auth:state.auth
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(signUpPage) ;