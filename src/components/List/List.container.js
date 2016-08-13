import { connect } from 'react-redux'
import { createSelector } from 'reselect'
import loader from 'hoc-react-loader'

import { getList, getFilter } from 'redux/reducers'
import { fetchList } from 'redux/actions'
import Component from './List'

const getSortedItems = createSelector(
  [getList],
  (list) => list.sort((l1, l2) => l1.name.first.localeCompare(l2.name.first))
)

const getFilteredItems = createSelector(
  [getSortedItems, getFilter],
  (list, filter) => list
    .filter(l => `${l.name.first}${l.name.last}`.includes(filter))
    .map(l => l.login.username)
)

const mapStateToProps = (state) => ({
  items: getFilteredItems(state),
})

const mapDispatchToProps = (dispatch) => ({
  load: () => dispatch(fetchList()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(loader(Component))
