import React, { PropTypes } from 'react'

const Fetch = ({ onClick }) => <button onClick={onClick}>Fetch</button>

Fetch.propTypes = {
  onClick: PropTypes.func.isRequired,
}

export default Fetch
