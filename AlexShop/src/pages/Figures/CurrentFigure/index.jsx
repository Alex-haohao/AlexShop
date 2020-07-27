import React from "react"
import "./style.less"
export default class Figures extends React.Component {
    render() {
        return (
            <div className="current-figure">
            <h2>Current Figure:  { this.props.figure }</h2>
            </div>
        )
    }
}