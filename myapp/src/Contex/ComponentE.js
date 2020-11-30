import React, { Component } from 'react'
import ComponentF from './ComponentF'
import Usercontext from './UserContext'
ComponentE.contextType = Usercontext

export class ComponentE extends Component {
    render() {
        return (
            <div>
                hello world {this.context}
                <ComponentF />
            </div>
        )
    }
}

export default ComponentE
