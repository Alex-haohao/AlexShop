import React from "react"
import api from "../../../api"
import SearchListView from "./SearchListView"
import LoadMore from '../../../components/LoadMore'

class SearchList extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            searchData:[],
            hasmore:false,
            page:0
        }
      //  this.http = this.http.bind(this);
    }

   

    componentDidMount(){
        const figure = this.props.figure
        const content = this.props.content

        this.http(figure,content,this.state.page)
    }

    componentWillUnmount(){
        this.setState =(state,callback)=>{
            return
        }
    }

    http=(figure,content,page)=>{
        api.search.search(figure,content,page)
        .then(res=>res.json())
        .then(data=>
            {
                console.log(data)
                this.setState({
                    searchData:this.state.searchData.concat(data.data),
                    hasmore:data.hasmore,
                    page:this.state.page+1

                })
            })
    }
    

    componentWillUpdate(prevProps,prevState){
        const figure = this.props.figure
        const content = this.props.content

        if(prevProps.content === content){
            return
        }
        this.http(figure,content,0)
        

    }

    loadMoreHandler = ()=>{
        const figure = this.props.figure
        const content = this.props.content

        console.log("chufa load")
        this.http(figure,content,this.state.page)
    }

    render(){
        return(
            <div>
                {
                    this.state.searchData ? <SearchListView data={this.state.searchData}/> :
                    <div>Loading ......</div>
                }

                {
                    this.state.hasmore ? <LoadMore onLoadMore = {this.loadMoreHandler}/>:
                    <div>No more data</div>
                }
               
               
            </div>
        )
    }
}


export default SearchList