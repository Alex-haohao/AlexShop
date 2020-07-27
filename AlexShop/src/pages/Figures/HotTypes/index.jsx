import React from 'react';
import "./style.less"

export default class HotType extends React.Component {

    clickHandler(figureName) {
        this.props.figureNameHandler(figureName);
        
    }

    render() {
        return (
            <div className="figure-list-container">
                <h3>Hot Figure type</h3>
                <ul className="clear-fix">
                    <li>
                        <span onClick={this.clickHandler.bind(this, 'Doll')}>Doll</span>
                    </li>
                    <li>
                        <span onClick={this.clickHandler.bind(this, '手办模型')}>手办模型</span>
                    </li>
                    <li>
                        <span onClick={this.clickHandler.bind(this, '真实模型')}>真实模型</span>
                    </li>
                    <li>
                        <span onClick={this.clickHandler.bind(this, '动漫模型')}>动漫模型</span>
                    </li>
                    <li>
                        <span onClick={this.clickHandler.bind(this, 'GK')}>GK</span>
                    </li>
                    
                </ul>
            </div>
        )
    }
}