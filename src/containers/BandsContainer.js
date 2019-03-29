import React, { Component } from 'react'
import { connect } from 'react-redux'

class BandsContainer extends Component {
  render() {
    return(
      <div>
        BandsContainer
      </div>
    )
  }
}

mapStateToProps = state => {
  return {
    state
  }
}

export default connect(mapStateToProps)(BandsContainer);
