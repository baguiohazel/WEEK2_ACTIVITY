function calculateElectricBill(kWh) {
  if (kWh < 0 || typeof kWh !== 'number') {
    return "Invalid input: Please enter a non-negative number.";
  }

  let total = 0;

  if (kWh <= 100) {
    total = kWh * 5;
  } else if (kWh <= 300) {
    total = (100 * 5) + ((kWh - 100) * 8);
  } else {
    total = (100 * 5) + (200 * 8) + ((kWh - 300) * 10);
  }

  return `Total kWh used: ${kWh} → Electric Bill: ₱${total}`;
}


console.log(calculateElectricBill(80));    
console.log(calculateElectricBill(250));   
console.log(calculateElectricBill(400));   
