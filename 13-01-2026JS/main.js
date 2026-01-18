const products = [
  { id: 1, name: 'iPhone', price: 2000 },
  { id: 2, name: 'Samsung', price: 1500 },
  { id: 3, name: 'Xiaomi', price: 1000 },
  { id: 4, name: 'Oppo', price: 1200 }
]

const orders = [
  {
    id: 1,
    items: [
      { productId: 1, quantity: 2 },
      { productId: 2, quantity: 1 }
    ]
  },
  {
    id: 2,
    items: [
      { productId: 1, quantity: 1 },
      { productId: 3, quantity: 3 }
    ]
  },
  {
    id: 3,
    items: [
      { productId: 2, quantity: 2 },
      { productId: 4, quantity: 1 }
    ]
  }
]

function getTopRevenueProduct (products, orders) {
    if(!Array.isArray(products) || !Array.isArray(orders)) {
        return 'Invalid input data.'
    }

    if(products.length === 0 || orders.length === 0) {
        return 'No products or orders available.'
    }

    const productPriceMap = {}
    for (const product of products) {
        productPriceMap[product.id] = product.price
    }

    const revenueMap = {}
    for (const order of orders) {
        for (const item of order.items) {
            const {productId} = item
            const amount = item.quantity * productPriceMap[productId]

            if (revenueMap[productId]) {
                revenueMap[productId] = revenueMap[productId] + amount
            } else {
                revenueMap[productId] = amount
            }

            }
        }
    
    let maxRevenue = 0
    let topProductId = null

    for (const productId in revenueMap) {
        if (revenueMap[productId] > maxRevenue) {
            maxRevenue = revenueMap[productId]
            topProductId = productId
        }
    }


    for (const product of products) {
        if (product.id === Number(topProductId)) {
            return product
        }
    }     
  }
    
    const topProduct = getTopRevenueProduct (products, orders)
    console.log('Top revenue product:', topProduct)