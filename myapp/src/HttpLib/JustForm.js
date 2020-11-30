import React, { Component } from 'react'

class JustForm extends Component {
    render() {
        return (
            <div>
                <form className="main-form" >
                    <div>
                        <label>UserId:</label>
                        <input type='text' name='UserId' placeholder='UserId' ></input>
                    </div>
                    <div>
                        <label>title:</label>
                        <input type='text' name='title' placeholder='title' ></input>
                    </div>
                    <div>
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default JustForm
