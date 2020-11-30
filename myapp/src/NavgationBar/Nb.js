import React, { Component } from 'react'
import './Style.css'

class Nb extends Component {    
    render() {
        return (
            <React.Fragment>
                <nav>
                    <label className="logo">Design X</label>
                    <ul>
                        <li><a className="active" href="http://localhost:3000/Homepage">Home Page</a></li>
                        <li><a href="http://localhost:3000/course">Course content</a></li>
                        <li><a href="http://localhost:3000/project">Project content</a></li>
                        <li><a href="http://localhost:3000/final">final content</a></li>
                        <li><a href="http://localhost:3000/about">About</a></li>
                    </ul>
                </nav>
                <div><h1>{this.props.content}</h1></div>
            </React.Fragment> 
        )
    }
}

export default Nb
