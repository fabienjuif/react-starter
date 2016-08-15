import reducer, { initState } from './list'

/* eslint-env mocha */

describe('list reducers', () => {
  it('should initialize', () => {
    const state = reducer()
    state.should.be.deep.equals(initState)
  })
})
