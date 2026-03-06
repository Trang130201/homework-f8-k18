function getProduct(productId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (productId === 1) {
        resolve({
          productId: 1,
          name: "iPhone",
          price: 20000000,
          stock: 5,
        });
      } else {
        reject("Sản phẩm không tồn tại");
      }
    }, 1000);
  });
}

function processPayment(product) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (product.stock > 0) {
        resolve("Thanh toán thành công");
      } else {
        reject("Hết hàng");
      }
    }, 1500);
  });
}

function createOrder(product) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        orderId: 999,
        productName: product.name,
        status: "SUCCESS",
      });
    }, 1000);
  });
}

console.log("Kiểm tra tồn kho...");
getProduct(1)
  .then((product) => {
    if (product.stock === 0) {
      throw "Hết hàng";
    }
    console.log("Tồn kho hợp lệ");
    console.log("Đang thanh toán...");
    return processPayment(product).then(() => product);
  })
  .then((product) => {
    console.log("Thanh toán thành công");
    console.log("Đang tạo đơn hàng...");
    return createOrder(product);
  })
  .then((order) => {
    console.log("Đặt hàng thành công!");
    console.log("Order:", order);
  })
  .catch((error) => {
    console.log("Lỗi:", error);
  });
