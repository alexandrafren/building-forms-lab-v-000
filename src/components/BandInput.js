// Add BandInput component
import React, { Component } from 'react'
import { connect } from 'react-redux'

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
    //set props
    this.setState({
      name: ''
    })
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

const mapDispatchToProps = dispatch => ({
  addBand: formData => dispatch({type: 'ADD_BAND', payload: formData})
})

export default connect(null, mapDispatchToProps)(BandInput);
