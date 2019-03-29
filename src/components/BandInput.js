// Add BandInput component
import React, { Component } from 'react'

class BandInput extends Component {

  constructor() {
    super();
    this.state = {
      name: ''
    }
  }

  handleSubmit = event => {
    this.setState({
      name: event.target.value
    })
  }

  handleChange = event => {
    preventDefault();
    this.setState
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Add Band!</label>
            <input type="text" onChange={this.handleChange} value={this.state.name}/>
            <input type="submit" />
          </form>
      </div>
    )
  }
}

export default BandInput
