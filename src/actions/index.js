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

export const updateUser = balances => ({
  type: 'UPDATE_USER',
  balances
});

// create dividers that signify which reducer each action belongs to

export const updateActive = order => ({
  type: 'UPDATE_ACTIVE',
  order
});

export const displayOrders = activeOrders => ({
  type: 'DISPLAY_ORDERS',
  activeOrders
});

export const setFilter = filter => ({
  type: 'SET_FILTER',
  filter
});

export const toggleOrder = id => ({
  type: 'TOGGLE_ORDER',
  id
});

export const addOrder = order => ({
  type: 'ADD_ORDER',
  order
})

export const removeOrder = order => ({
  type: 'REMOVE_ORDER',
  order
})
