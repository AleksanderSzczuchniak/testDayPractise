export const orderTotal = (arrayOfOrders) => (
    arrayOfOrders.reduce(
      (reduced, item) => (
        item.quantity !== undefined ?
          reduced + (item.price * item.quantity)
          :
          reduced + item.price
      ),
      0
    )
  )