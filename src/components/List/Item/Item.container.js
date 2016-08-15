import { connect } from 'react-redux'

import Component from './Item'

const mapStateToProps = (state, { id }) => ({
  ...state.list.find(i => i.login.username === id),
})

export default connect(
  mapStateToProps,
)(Component)
