import React, { Component } from 'react'

import UpdatedComponent from './WithCounter'

export class HoverCounter extends Component {

    render() {
        const {handler,count} = this.props
        return (
            <div>
                <h2 onMouseOver={handler}>hovered {count} times</h2>
            </div>
        )
    }
}

export default UpdatedComponent(HoverCounter,10)
