import React from "react"
import "./style.less"
import {Link} from 'react-router-dom'

export default class Item extends React.Component {
    render() {
        var item = this.props.data;
        console.log(item)
        return (
            <div className="list-item">
                <Link to={`/details/${item.id}`} >
                <img src={item.img} alt="" />
                <div className="mask">
                    <div className="left">
                        <p>{item.title}</p>
                        <p>{item.figureType}</p>
                    </div>
                    <div className="right">
                        {/* dangerouslySetInnerHTML:识别标签结构 */}
                        <p dangerouslySetInnerHTML={{ __html: item.price+"¥" }} />
                    </div>
                </div>
                </Link>
                
            </div>
        )
    }
}