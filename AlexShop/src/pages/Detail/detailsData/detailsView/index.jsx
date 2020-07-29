import React from "react"
import Swiper from "../../../../components/Swiper"
// import DetailsHeader from "../../../../components/Header"
// import Tabs from "../../../../components/Tabs"
// import CommentView from "../CommentView"
import "./style.less"
import DetailHeader from "../../../../components/Header"
import Tabs from "../../../../components/Tabs"
import CommentView from '../commentView'
import StoreBuy from "../storeBuy"


export default class DetailsView extends React.Component {
    render() {
        const data = this.props.data;
        const comments = this.props.comment
        return (
           
            <div className="detail-info">
                                <DetailHeader title={"Detail Page"}/>
                                { data.imgs ? <Swiper banners={data.imgs}  />:<div>Loading ...</div>}

                 <Tabs>
                <tab tabname="details">
                
                        <h3>{data.title}</h3>
                        <div className="box">
                            <ul>
                                <li>
                                    <span>{data.price}¥</span>
                                    <p>price</p>
                                </li>
                            </ul>
                        </div>

              {
              data.info ? <div className="info">
              <div className="info-list"><p>Type：{data.info.type}</p></div>
              <div className="info-list">
                                <p>Release date：{data.info.years}</p>
                            </div></div>:
                <div>Loading ......</div>
             }
             
             </tab>

             <tab tabname="comment">
                 <CommentView comments = {comments}/>

             </tab>
</Tabs>
<StoreBuy id={ this.props.id } history={this.props.history}  data={data}/> 


            </div> 
           
              
        )
    }
}