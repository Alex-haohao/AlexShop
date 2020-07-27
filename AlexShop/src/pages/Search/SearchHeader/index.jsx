import React from "react"
import "./style.less"
import SearchInput from "../../../components/SearchInput"


export default class SearchHeader extends React.Component {

    clickBackHandler(){
        window.history.back();
    }

    render(){
        return(
            <div id="search-header" className="clear-fix">
                <span className="back-icon float-left" onClick={ this.clickBackHandler }>
                    <i className="icon-chevron-left"></i>
                </span>
                <div className="input-container">
                    <i className="icon-search"></i>
                    <SearchInput history={ this.props.history }/>
                </div>
            </div>

                
        )
    }
}