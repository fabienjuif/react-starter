import { connect } from 'react-redux'

import Component from './List'

const mapStateToProps = ({ list, filter }) => {
  return {
    items: list
      .filter(l => `${l.name.first}${l.name.last}`.includes(filter))
      .map(l => l.id),
  }
}

export default connect(
  mapStateToProps
)(Component)
