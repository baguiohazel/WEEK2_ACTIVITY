function calculateParkingFee(vehicleType, durationHours, isVIP) {
  if (durationHours <= 0) {
    return "Invalid duration. Must be greater than 0.";
  }

  // Calculate base fee
  let fee = 50; // first hour fixed

  if (durationHours > 1) {
  
    fee += (durationHours - 1) * 20;
  }

  // Apply VIP discount
  if (isVIP) {
    fee *= 0.7; // 30% off
  }

  return `Vehicle Type: ${vehicleType}\nDuration: ${durationHours} hour(s)\nVIP: ${isVIP ? "Yes" : "No"}\nTotal Fee: ₱${fee.toFixed(2)}`;
}


console.log(calculateParkingFee("Car", 1, true));  
console.log(calculateParkingFee("Motorcycle", 3, false)); 
console.log(calculateParkingFee("Truck", 4, true));  
