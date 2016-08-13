import { connect } from 'react-redux'

import { setFilter } from 'redux/actions'
import Component from './Filter'

const mapDispatchToProps = (dispatch) => ({
  onChange: (e) => dispatch(setFilter(e.target.value)),
})

export default connect(
  undefined,
  mapDispatchToProps,
)(Component)
