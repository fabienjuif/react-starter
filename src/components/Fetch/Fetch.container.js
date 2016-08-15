import { connect } from 'react-redux'

import { fetchList } from 'redux/actions'
import Component from './Fetch'

const mapDispatchToProps = (dispatch) => ({
  onClick: () => dispatch(fetchList()),
})

export default connect(
  undefined,
  mapDispatchToProps,
)(Component)
