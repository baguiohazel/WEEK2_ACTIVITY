function checkoutWithLoyalty(totalPurchase, currentPoints) {
  if (totalPurchase < 0) {
    return "Invalid purchase amount.";
  }
  if (currentPoints < 0) {
    return "Invalid points.";
  }

  // Calculate new points earned (1 per ₱100)
  let pointsEarned = Math.floor(totalPurchase / 100);

  // Total points available before redeeming
  let totalPoints = currentPoints + pointsEarned;

  // Calculate how many discounts can be applied
  let discountSets = Math.floor(totalPoints / 10);
  let discountAmount = discountSets * 50;

  // Calculate final bill after discount
  let finalBill = totalPurchase - discountAmount;
  if (finalBill < 0) finalBill = 0; 

  // Update remaining points after redeeming
  totalPoints = totalPoints - discountSets * 10;

  return {
    originalPurchase: `₱${totalPurchase.toFixed(2)}`,
    pointsEarned: pointsEarned,
    discountApplied: `₱${discountAmount.toFixed(2)}`,
    finalBill: `₱${finalBill.toFixed(2)}`,
    remainingPoints: totalPoints
  };
}

console.log(checkoutWithLoyalty(1200, 5)); 


console.log(checkoutWithLoyalty(450, 25)); 

