import React, { Component } from 'react'

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
