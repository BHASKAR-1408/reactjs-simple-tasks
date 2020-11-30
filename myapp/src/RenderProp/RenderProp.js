import React, { Component } from 'react'

 class RenderProp extends Component {
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
        const { count} = this.state
        return (
            <div>
                <button onClick={this.incrementCounter}>count {count} times</button>
            </div>
        )
    }
}

export default RenderProp
