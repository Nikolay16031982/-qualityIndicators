import React, { Component } from 'react'
import "./InOptions.css"; 
export default class InOptions extends Component {
    render() {
        return (
            <div className="indiv">
            <p  class ="inp"> {this.props.lable} &nbsp; <input type="text"></input> </p> 
            </div>
        )
    }
}
InOptions.defaultProps = {lable: "Период повторения"}