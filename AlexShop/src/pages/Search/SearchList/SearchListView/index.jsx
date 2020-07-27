import React from "react"
import "./style.less"
import Item from "./Item/Index"


export default class SearchListView extends React.Component{
    
    
    render(){
        
        const data = this.props.data
        
        if (this.props.data){
        return(
         
            <div className="list-container">
               {
                   data.map((element,index) => {
                  return <Item data={ element } key={element.id}/>
                   })
               }
            </div>
        )
       
            }
            else{
                return(
                    <div>Loading</div>
                )
            }
            
    }
}