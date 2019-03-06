export const storeUsername = username => ({
  type: 'STORE_USERNAME',
  username
});

export const storeBalances = balances => ({
  type: 'STORE_BALANCES',
  balances
});

export const storeOrders = orders => ({
  type: 'STORE_ORDERS',
  orders
});

export const storeAsks = asks => ({
  type: 'STORE_ASKS',
  asks
});

export const storeBids = bids => ({
  type: 'STORE_BIDS',
  bids
});

export const updateUser = balances => ({
  type: 'UPDATE_USER',
  balances
});

export const saveOrder = order => ({
  type: 'SAVE_ORDER',
  order
});
export const displayOrders = orders => ({
  type: 'DISPLAY_ORDERS',
  orders
});

export const setFilter = filter => ({
  type: 'SET_FILTER',
  filter
});

export const toggleOrder = (id) => ({
  type: 'TOGGLE_ORDER',
  id
})