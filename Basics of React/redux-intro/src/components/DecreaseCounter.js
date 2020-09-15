import React, { Component } from 'react'
import { decreaseCounter } from '../redux/actions/counterActions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class DecreaseCounter extends Component {
  render() {
    return (
      <div>
        <button onClick={e => {
          this.props.dispatch(decreaseCounter());
        }}>
          1 eksilt
        </button>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(decreaseCounter, dispatch) }
}

export default connect(mapDispatchToProps)(DecreaseCounter); 