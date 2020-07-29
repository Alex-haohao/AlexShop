import React from "react"
import "./style.less"
import {Link} from "react-router-dom"
import SearchInput from "../../../components/SearchInput/index"

export default class HomeHeader extends React.Component {
    render() {
        return (
            <div id="home-header" className="clear-fix">
                <div className="home-header-left float-left">
                    <Link to="/figures"><span>{this.props.figure}</span>
                    <i className="icon-angle-down"></i></Link>
                    
                </div>
                <div className="home-header-right float-right">
                </div>
                <div className="home-header-middle">
                    <div className="search-container">
                        <i className="icon-search"></i>
                        <SearchInput history = {this.props.history}/>
                    </div>
                </div>
            </div>
        )
    }
}