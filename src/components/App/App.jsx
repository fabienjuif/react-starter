import React from 'react'

import Filter from '../Filter'
import List from '../List'
import styles from './App.scss'

const App = () => (
  <div className={styles.app}>
    <Filter />
    <List />
  </div>
)

export default App
