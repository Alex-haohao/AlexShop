import React from 'react'
import './style.less'

export default class SearchInput extends React.Component {
    constructor(props){
        super(props)
        this.state={
            values:'',


        }
    }

    getValuesHandler(e){
        this.setState({
            values:e.target.value
        })
    }

    keyUpHandler(e){
        if(e.keyCode === 13){
            this.props.history.push('/search/'+this.state.values)
        }
    }

    render(){


        return(
            <input
            type="text"
            className="search-input"
            value={this.state.values}
            placeholder="请输入搜索内容"
            onChange={this.getValuesHandler.bind(this)}
            onKeyUp = {this.keyUpHandler.bind(this)}
        />
        )
    }
}