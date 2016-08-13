import { connect } from 'react-redux'

import Component from './List'

const mapStateToProps = ({ list, filter }) => {
  return {
    list: list.filter(l => `${l.name.first}${l.name.last}`.includes(filter)),
  }
}

export default connect(
  mapStateToProps
)(Component)
