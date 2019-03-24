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

export const storeSpread = spread => ({
  type: 'STORE_SPREAD',
  spread
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

export const addAsk = ask => ({
  type: 'ADD_ASK',
  ask
});

export const removeAsk = ask => ({
  type: 'REMOVE_ASK',
  ask
});

export const addBid = bid => ({
  type: 'ADD_BID',
  bid
});

export const removeBid = bid => ({
  type: 'REMOVE_BID',
  bid
});

export const updateBid = (id, newBid) => ({
  type: 'UPDATE_BID',
  id,
  newBid
})

export const updateAsk = (id, newAsk) => ({
  type: 'UPDATE_ASK',
  id,
  newAsk
})