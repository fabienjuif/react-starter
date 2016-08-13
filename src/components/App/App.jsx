import React from 'react'

import Filter from '../Filter'
import List from '../List'
import Fetch from '../Fetch'
import styles from './App.scss'

const App = () => (
  <div className={styles.app}>
    <Filter />
    <Fetch />
    <List />
  </div>
)

export default App
