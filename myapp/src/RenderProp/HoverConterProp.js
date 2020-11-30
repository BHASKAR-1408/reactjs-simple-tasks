import React, { Component } from 'react'

 class HoverConterProp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count:0
        }
    }

    incrementCounter = ()=>{
        this.setState({
            count:this.state.count+1
        })
    }
    render() {
        const {count} = this.state
        return (
            <div>
                <h2 onMouseOver={this.incrementCounter}>count {count} times</h2>
            </div>
        )
    }
}

export default HoverConterProp
