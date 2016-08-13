import React, { PropTypes } from 'react'

const Filter = ({ onChange }) => (
  <input onChange={onChange} />
)

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
}

export default Filter
