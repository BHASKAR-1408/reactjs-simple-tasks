import React, { Component } from 'react'
import axios from 'axios'

 class Axios2 extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            UserId:"",
            title:"",
            body:""
        }
    }
    

        changeHandler = (e)=>{
            this.setState({
                [e.target.name]:e.target.value
            })
        }

        submitHandler =(e)=>{
            e.preventDefault()
            console.log(this.state);
            axios.post('https://jsonplaceholder.typicode.com/posts',this.state)
            .then(result=>{
                console.log(result);
            }).catch(error=>{
                console.log(error);
            })
        }


    render() {

        const Style = {
            textAlign:"center"
        }
        const {UserId,title,body} = this.state

        return (
            <React.Fragment>
                <form className="main-form" onSubmit={this.submitHandler} style={Style}>
                    <div>
                        <label>UserId:</label>
                        <input type='text' name='UserId' placeholder='UserId' value={UserId} onChange={this.changeHandler}></input>
                    </div>
                    <div>
                        <label>title:</label>
                        <input type='text' name='title' placeholder='title' value={title} onChange={this.changeHandler}></input>
                    </div>
                    <div>
                        <label>body:</label>
                        <input type='text' name='body' placeholder='body' value={body} onChange={this.changeHandler}></input>
                    </div>
                    <div>
                        <button type="submit">Submit</button>
                    </div>
                </form>
                <a href="http://localhost:3000/justform">Click here for next page</a>
            </React.Fragment>
        )
    }
}

export default Axios2
