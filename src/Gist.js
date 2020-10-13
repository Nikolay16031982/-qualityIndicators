import React, { Component } from 'react'
import {Line} from  "react-chartjs-2"
import NavPanel from "./NavPanel/NavPanel"
export default class Gist extends Component {
    constructor(props) {
        super(props)    
        this.state = 
                {
                labels:["1","2","3","4","5","6","8","10"],
                    datasets:[
                    {
                      data:[1, 2, 3, 4, 11, 5]
                    }
               ]
              };
           this.setData =  this.setData.bind(this);
        };
    setData(){
        this.setState({
            labels:["1","2","3","4","5","6","7","8"],
            datasets:[
            {
              data:[Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random()]
            }
                    ]
        })
             
        }
    render() {
        
        
        return (            
            <div style ={{width: 600, height: 550}}>            
            <Line
               options = {{responsive: true}}                
               data= {this.state}/>
               <button onClick={this.setData}>Show</button>
               <NavPanel></NavPanel>
           </div>    
        )
    }
}
