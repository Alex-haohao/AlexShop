import React from "react"

export default class LoadMore extends React.Component{

    constructor(){
        super()
        this.load = React.createRef()

    }

    componentDidMount(){
        const winHeight = document.documentElement.clientHeight
        var timer = null;
        window.onscroll = (e)=>{
            if(timer){
                clearTimeout(timer);
            }
            timer = setTimeout(() =>{
                if(this.load.current.getBoundingClientRect().top <winHeight){
                    console.log("need load more")
                    this.props.onLoadMore()
                }
            },300)

           
           
        }
    }

    componentWillUnmount(){
        window.onscroll = null
    }



    render(){
        return(
            <div ref={this.load}>
                LoadMore
            </div>
        )
    }
}