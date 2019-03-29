// Add BandInput component
import React, { Component } from 'react'

class BandInput extends Component {
  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Add Band!</label>
            <input type="text" onChange={this.handleChange} value={this.state.text}/>
            <input type="submit" />
          </form>
      </div>
    )
  }
}

export default BandInput
