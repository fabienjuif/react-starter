export const initState = [
  {
    id: '1',
    name: {
      last: 'kelly',
      first: 'clara',
    },
  },
  {
    id: '2',
    name: {
      last: 'vreeman',
      first: 'jodie',
    },
  },
  {
    id: '3',
    name: {
      last: 'christensen',
      first: 'villads',
    },
  },
]
export const initAction = { type: 'INIT_ACTION' }

export default (state = initState, action = initAction) => {
  switch (action.type) {
    default: return state
  }
}
