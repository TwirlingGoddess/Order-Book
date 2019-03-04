export const storeUser = user => ({
  type: 'STORE_USER',
  user
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

export const updateUser = balance => ({
  type: 'UPDATE_USER',
  balance
})