import React from 'react'

const UpdatedComponent = (OriginalComponent,incrementNumber)=>{
    class NewComponent extends React.Component {
        constructor(props) {
            super(props)
        
            this.state = {
                 count:0
            }
        }
        
        incrementCount = ()=>{
            this.setState({
                count:this.state.count+incrementNumber
            })
        }
    
        render(){

            return <OriginalComponent handler={this.incrementCount} count={this.state.count} {...this.props} />
        }
    }

    return NewComponent
}

export default UpdatedComponent