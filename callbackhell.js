// Simulate asynchronous operations with setTimeout
function getUser(id, callback) {
  setTimeout(() => {
    console.log(`Fetching user with ID: ${id}`);
    const user = { id: id, name: `User ${id}` };
    callback(null, user);
  }, 1000);
}

function getOrders(user, callback) {
  setTimeout(() => {
    console.log(`Fetching orders for user: ${user.name}`);
    const orders = [`Order A for ${user.name}`, `Order B for ${user.name}`];
    callback(null, orders);
  }, 1000);
}

function processOrders(orders, callback) {
  setTimeout(() => {
    console.log(`Processing orders: ${orders.join(', ')}`);
    const processedOrders = orders.map(order => `Processed ${order}`);
    callback(null, processedOrders);
  }, 1000);
}

// Callback hell in action
getUser(123, (err, user) => {
  if (err) {
    console.error("Error getting user:", err);
    return;
  }
  getOrders(user, (err, orders) => {
    if (err) {
      console.error("Error getting orders:", err);
      return;
    }
    processOrders(orders, (err, processedOrders) => {
      if (err) {
        console.error("Error processing orders:", err);
        return;
      }
      console.log("All tasks completed!");
      console.log("Processed Orders:", processedOrders);
    });
  });
});