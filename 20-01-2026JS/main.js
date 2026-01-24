// Homework 26.


// const product = {
//   id: number,
//   name: string,
//   price: number,
//   remaining: number
// }

// // ví dụ
const products = [
  { id: 1, name: "Gạo ST25 (5kg)", price: 180000, remaining: 20 },
  { id: 2, name: "Dầu ăn Simply (1L)", price: 65000, remaining: 15 },
  { id: 3, name: "Nước mắm Nam Ngư (750ml)", price: 45000, remaining: 30 },
  { id: 4, name: "Sữa tươi Vinamilk (1L)", price: 38000, remaining: 25 },
  { id: 5, name: "Trứng gà (10 quả)", price: 42000, remaining: 18 }
];

// const order = {
//   id: number,
//   productId: number,
//   quantity: number
// }
// Make empty array to save new data
const orders = []
// Create the createOrder function
function createOrder(productId, orderQuantity){
    // Check params are not null
    if (productId === null || orderQuantity === null){
        return "Invalid input"
    }

    // Check positive param
    if (orderQuantity <= 0){
        return "Invalid input: must be positive number"
    }

    // Check type of params
    if (typeof productId !== "number" || typeof orderQuantity !== "number"){
        return "Invalid input: must be number"
    }

    // Find product by id
    const product = products.find((product) =>{
        if (productId === product.id){
            return true
        }    
    })

    // If product not found
    if (!product) {
        return "Product not found"
    }


    // Check stock
    if (product.remaining < orderQuantity){
        return "Out of stock"
    }


    // Get current max order id
    let maxId = 0
    orders.forEach(order => {
        if (maxId < order.id){
            maxId = order.id
        }
    })

    // Create new order
    const order ={
        id: maxId + 1,
        productId: productId, 
        quantity: orderQuantity
    }
    // Push new order to order list
    orders.push(order)
    // Calculate product remaining
    product.remaining = product.remaining - orderQuantity

    return order
}


// Create the updateOrder function
function updateOrder(orderId, quantity){
    // Check params are not null
    if (orderId === null || quantity === null){
        return "Invalid input"
    }

    // Check type of params
    if (typeof orderId !== "number" || typeof quantity !== "number"){
        return "Invalid input: must be number"
    }

    // Check valid quantity
    if (quantity <= 0){
        return "Invalid input: must be positive number"
    }

    // Find order by id
    const order = orders.find((order) =>{
        if (orderId === order.id){
            return true
        }
    })

    // check order 
    if(!order) {
        return "Order not found"
    }

    // Find product by id
    const product = products.find((product) =>{
        if (order.productId === product.id){
            return true
        }
    })
    if (!product) {
        return "Product not found"
    }


    // Calculate quantity diff
    const diff = quantity - order.quantity


    // Compare stock quantity with quantity dif
    if( diff > 0 && product.remaining < diff){
        return "Out of stock"
    }
   
    // Calculate new remaining
    product.remaining = product.remaining - diff
 
    // Update quantity
    order.quantity = quantity

    return order
}


// Create the deleteOrder function
function deleteOrder(orderId){
    // Check params are not null
    if (orderId === null){
        return "Invalid input"
    }

    // Check type of params
    if (typeof orderId !== "number"){
        return "Invalid input: must be number"
    }

    // Find order by id
    const order = orders.find((order) =>{
        if(orderId === order.id)
            return true
    })

    // check order 
    if(!order) {
        return "Order not found"
    }
    // Create order id map
    const orderIds = orders.map((order) =>{
        return order.id    
    })
    
    // Find order id index
    const index = orderIds.indexOf(order.id) 

    // Remove item from orders at index
    orders.splice(index, 1)

    // Find product by id
    const product = products.find((product) =>{
        if (product.id === order.productId){
            return true
        }
    })

    // Update product remaining with product quantity
    product.remaining = product.remaining + order.quantity

    return order
}

createOrder(2, 5)
createOrder(3, 8)
createOrder(1, 10)
createOrder(5, 20)
console.log(orders)
// [
//   { id: 1, productId: 2, quantity: 5 },
//   { id: 2, productId: 3, quantity: 8 },
//   { id: 3, productId: 1, quantity: 10 }
// ]
updateOrder(1, 10)
updateOrder(2, 4)
updateOrder(3, 3)
console.log(orders)
 // [
//   { id: 1, productId: 2, quantity: 10 },
//   { id: 2, productId: 3, quantity: 4 },
//   { id: 3, productId: 1, quantity: 3 }
// ]
deleteOrder(1)
console.log(orders)
// [
//   { id: 2, productId: 3, quantity: 4 },
//   { id: 3, productId: 1, quantity: 3 }
// ]



