import React from "react"
import LoginForm from "./loginForm"
import Header from "../../components/Header"
import "./style.less"

class LoginPage extends React.Component {
    render() {
        return (
            <div className="loginPage">
                <Header title ="Login Page"/>

                <div className="row">
                    <div className="col-sm-3"></div>
                    <div className="col-sm-6">

                        <LoginForm history={this.props.history} />
                    </div>
                    <div className="col-sm-3"></div>
                </div>
            </div>
        )
    }

}

export default LoginPage