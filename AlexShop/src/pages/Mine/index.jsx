import React from "react"
import FootNav from "../../components/FootNav"
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { logout } from '../../actions/login'
import "./style.less"

class Mine extends React.Component {
    logout = (e) => {
        e.preventDefault();
        this.props.logout();
    }

    render() {
        const { isAuthenticated,user } = this.props.auth

        const userLinks = (<ul>
            <li >
                <span>Welcome:{user.username} </span>
                <p>press here to log out</p>
                <Link className="btn btn-primary" onClick={this.logout.bind(this)} to="/">logout</Link>
            </li>
        </ul>)

        const guestLinks = (<ul >
            <li >
                <p>If you do not have a account, please sign up here</p>
                <Link  to="/signup" className="btn btn-primary">sign up</Link>
            </li>

            <li >
            <p>If you already have a account, please login here</p>
                <Link  to="/login" className="btn btn-primary">login</Link>
            </li>

        </ul>)


        return (
            <div>
                <div className="container">
                    <h1>HomePage</h1>
                   
                    <div className="box">
                        
                        {isAuthenticated ? userLinks :guestLinks}

                    </div>

                </div>
                <FootNav />
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
}
export default connect(mapStateToProps, { logout })(Mine)