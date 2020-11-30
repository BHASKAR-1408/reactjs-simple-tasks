import React, { Component } from 'react'
import UpdatedComponent from './WithCounter'

// this is just like child component which will call in UpdatedComponent

export class HigherO extends Component {

    render() {
        const {count,handler}=this.props
        return (
            <div>
                <button onClick={handler}>{this.props.name} count {count} times</button>
            </div>
        )
    }
}

export default UpdatedComponent(HigherO,6)
