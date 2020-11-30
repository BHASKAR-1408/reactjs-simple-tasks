import React, { Component } from 'react'
import '../App.css'


export class Table extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             Name:"Badivenkatagalla Bhaskar",
             Qualifications:[
                 {
                     SSC:"80%",
                     INTER:"10%",
                     DEGREE:"60%"
                 }
             ],
             Years:{
                 SSC:2013,
                 INTER:2015,
                 DEGREE:2019
             }
        }
    }
    
    componentDidMount(){
        this.setState({
            Qualifications:this.state.Qualifications
        })
    }

    render() {
        const {Years} = this.state
        return (
            <div>
                <div><th>{this.state.Name} Qualifications:</th></div>
               {
                this.state.Qualifications.map(item=>{ 
                    return (
                    <table style={{border: "1px solid black"}}>
                        <tr style={{border: "1px solid black"}}>
                            <th>Designation</th>
                            <th>Marks</th>
                            <th>Years</th>
                        </tr>
                        <tr style={{border: "1px solid black"}}>
                            <th>SSC</th>
                            <td>{item.SSC}</td>
                            <td>{Years.SSC}</td>
                        </tr>
                        <tr>
                            <th>Inter</th>
                            <td >{item.INTER}</td>
                            <td>{Years.INTER}</td>
                        </tr>
                        <tr>
                            <th>Degree</th>
                            <td >{item.DEGREE}</td>
                            <td>{Years.DEGREE}</td>
                        </tr>
                    </table>
                    )
               })
            }
            </div>
        )
    }
}

export default Table
