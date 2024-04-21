import React, { Component } from 'react'

export default class Random extends Component {
    constructor(props){
        super(props)
        this.state={cname:'alto'}
    }

    //method to change the value of state
    change(data){
        this.setState({cname:data})
    }
    render() {
    return (
        <>
      <div>
        <h1>Inside class components</h1>
        <h3>My car name is:{this.state.cname}</h3>
        <h2>Shared subject is:{this.props.sub}</h2>
      </div>
      <button onClick={()=>this.change('swift')}>Click</button>
      

      </>
    )
  }
}
