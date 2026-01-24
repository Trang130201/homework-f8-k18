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

function findHightestRevenueProduct (products, orders){
   // Save total quantity sold for each product
    const productQuantityMap = {}
     // Loop through all orders
    orders.forEach(order => { 
      // Loop through items in an order
        order.items.forEach(item => {
            const {productId, quantity} = item
            // Add quantity to the product
            if (productQuantityMap[productId]){
                productQuantityMap[productId] += quantity
            }
            else {
                productQuantityMap[productId] = quantity
            }
        })
    })

    const productRevenueMap = {}
    let maxRevenue = 0
    products.forEach(product =>{
        const quantity = productQuantityMap[product.id]
        // Calculate revenue for each product
        const revenue = quantity * product.price
         // Update max revenue
        if (maxRevenue < revenue){
            maxRevenue = revenue
        }
        productRevenueMap[product.id] = revenue

    })
    // Assume the first product is the highest
    let maxRevenueProductId = products[0].id
    let maxRevenueProduct = productRevenueMap[maxRevenueProductId]
    // Find the product with the highest revenue
    for (const key in productRevenueMap){
        if(maxRevenueProduct < productRevenueMap[key]){
             maxRevenueProduct = productRevenueMap[key]
             maxRevenueProductId = key
        }
    }
    // Get the product object by id
    const topRevenueByProduct = products.find((product) => {
        return Number(maxRevenueProductId) === product.id  
    })
  
  return topRevenueByProduct

}
console.log(findHightestRevenueProduct(products, orders))
// { id: 1, name: 'iPhone', price: 2000 }
