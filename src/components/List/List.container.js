import { connect } from 'react-redux'
import { createSelector } from 'reselect'

import { getList, getFilter } from 'redux/reducers'
import Component from './List'

const getFilteredItems = createSelector(
  [getList, getFilter],
  (list, filter) => list
    .filter(l => `${l.name.first}${l.name.last}`.includes(filter))
    .map(l => l.id)
)

const mapStateToProps = (state) => {
  return {
    items: getFilteredItems(state),
  }
}

export default connect(
  mapStateToProps
)(Component)
