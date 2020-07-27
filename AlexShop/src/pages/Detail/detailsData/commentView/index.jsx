import React from "react"
import './style.less'
import Item from './Item'


export default class CommentView extends React.Component{
    render(){
        const data = this.props.comments
        return(
            
            <div className="comment-list">
                {data.map((item, index) => {
                    return <Item key={index} data={item}/>
                })}
            </div>
        )
    }
}