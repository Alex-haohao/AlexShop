import React from "react"
import FootNav from "../../components/FootNav"
import HomeHeader from "./HomeHeader"
import Swiper from "../../components/Swiper"
import HomeHot from "./HomeHot"
import api from "../../api"

// 引入图片
import banner1 from "../../static/images/banner10.jpg"
import banner2 from "../../static/images/banner11.jpg"
import banner3 from "../../static/images/banner12.jpg"

import {connect} from 'react-redux'

 class Home extends React.Component{


    constructor(){
        super()
        this.state={
            swiper1:[]
        }
    }

    componentDidMount() {
        api.homehot.swiperdData()
            .then(res => res.json())
            .then(data => {
                this.setState({
                    swiper1:data
                })
            })

    }


    render(){
        return(
            <div>
                <HomeHeader figure = {this.props.figure.figureName} history = {this.props.history}/>
                <Swiper banners={ [banner1,banner2,banner3] }/>
                <HomeHot figure = {this.props.figure.figureName}/>
                <FootNav />
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        figure:state.figure
    }
}
export default connect(mapStateToProps)(Home)