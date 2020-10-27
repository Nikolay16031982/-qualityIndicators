import React, { Component } from 'react'
import "./InOptions.css";
export default class InOptions extends Component {
    render() {
        return (
            <div className="indiv">
                 {this.props.lable1}<input type="text"></input>
                {this.props.lable2}<input type="text"></input>
                {this.props.lable3}<input type="text"></input>
            </div>
        )
    }
}
InOptions.defaultProps = {lable1: "Период обзора", lable2: "Период повторения", lable3: "Длительность импульса", }