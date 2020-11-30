import React, { Component } from 'react'
import {UserConsumer} from './UserContext'

export class ComponentF extends Component {
    render() {
        console.log("my name is bhaskar");
        return (
            <UserConsumer>  
                { 
                    username=>{
                        return <div>
                            Hello Mr.{username}
                            <h1>this is bhaskar</h1>
                        </div>
                    }
                }
            </UserConsumer>
        )
    }
}

export default ComponentF
