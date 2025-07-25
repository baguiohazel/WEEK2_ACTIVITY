function calculateOrder(items) {
  let totalItems = 0;
  let totalPrice = 0;

  console.log(" Order Summary:\n");

  // Display each item
  items.forEach(item => {
    let itemTotal = item.quantity * item.price;
    totalItems += item.quantity;
    totalPrice += itemTotal;

    console.log(`• ${item.name} - ${item.quantity} x ₱${item.price.toFixed(2)} = ₱${itemTotal.toFixed(2)}`);
  });

  console.log("\n-----------------------------");

  // Prepare discount options
  let discounts = [];

  if (totalPrice > 1000) {
    discounts.push({ name: "10% off", amount: totalPrice * 0.10 });
  }

  if (totalPrice >= 5000) {
    discounts.push({ name: "20% off", amount: totalPrice * 0.20 });
  }

  if (totalItems >= 5) {
    discounts.push({ name: "₱100 off for 5+ items", amount: 100 });
  }

  // Determine the best discount
  let bestDiscount = discounts.reduce(
    (max, d) => d.amount > max.amount ? d : max,
    { name: "No Discount", amount: 0 }
  );

  let finalTotal = totalPrice - bestDiscount.amount;

  // Final result
  console.log(`\nTotal Items: ${totalItems}`);
  console.log(`Total Price: ₱${totalPrice.toFixed(2)}`);
  console.log(`Discount Applied: ${bestDiscount.name}`);
  console.log(`Discount Amount: ₱${bestDiscount.amount.toFixed(2)}`);
  console.log(`Final Total: ₱${finalTotal.toFixed(2)}\n`);
}

let orderItems = [
  { name: "Shirt", quantity: 2, price: 350 },
  { name: "Shoes", quantity: 1, price: 2000 },
  { name: "Cap", quantity: 3, price: 150 }
];

calculateOrder(orderItems);
