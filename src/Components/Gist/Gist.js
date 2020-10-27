import React, { Component } from 'react';
import {Line} from  "react-chartjs-2";
import NavPanel from "../../NavPanel/NavPanel";
import html2canvas from "html2canvas";
import "./Gist.css";

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
    copy(){
      // alert(document.querySelector(".chartjs-render-monitor"));

       // html2canvas(document.querySelector(".chartjs-render-monitor"), {       
      //      onrendered: (canvas) => {
       //         let im = canvas.toDataURL("image/png");
       //         alert(canvas);
       //         window.open(im);
        //        // document.getElementById("myForm").submit();
       //     }
       //   })

          html2canvas(document.querySelector(".lineDiv").then(function(canvas) {
            document.body.appendChild(canvas);
        }))
         
         
         //Line.   Line.toBase64Image()
     }   
    render() {
        
        return (            
            <div style ={{width: 600, height: 550}} className="lineDiv">         
            <Line className="lineChart"
               options = {{responsive: true}}                
               data= {this.state}/>
               <button onClick={this.setData}>Show</button> 
               <button className="copyButton" onClick={this.copy}>Copy</button>                           
               <NavPanel></NavPanel>
           </div>    
        )
    }
}
