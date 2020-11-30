import React, { Component } from 'react'
import axios from 'axios';


export class Axios1 extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             posts:[]
        }
    }

    componentDidMount(){
        axios.get("https://jsonplaceholder.typicode.com/posts").then((data)=>{
            console.log(data.data);
            this.setState({
                posts:data.data
            })
        }).catch((err)=>{
            console.log(err);
        })
    }
    
    render() {
        const {posts} = this.state
        return (
            <div>
                {
                    posts.map(item=> <div key={item.id}>{item.id}).  {item.body}</div>)
                }
            </div>
        )
    }
}

export default Axios1
