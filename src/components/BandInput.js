// Add BandInput component
import React, { Component } from 'react'

class BandInput extends Component {

  constructor() {
    super();
    this.state = {
      name: ''
    }
  }

  let handleSubmit = event => {

  }

  ley handleChange = event => {

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
