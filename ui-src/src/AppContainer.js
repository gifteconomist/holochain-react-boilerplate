import { connect } from 'react-redux'
import App from './App'
import {
  getAnchors
} from './actions'

const mapStateToProps = state => {
  return {
    ...state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getAnchors: (userHash, isMe, then) => {
      dispatch(getAnchors(userHash, isMe, then))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
