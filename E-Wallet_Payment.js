let paymentRecords = [];

function AddPayment(Type, Amount, Timestamp) {
    let record = {
        Type: Type,
        Amount: Amount,
        Timestamp: Timestamp
    };
    paymentRecords.push(record);
}


AddPayment("GCash", 150.75, "2025-07-20T14:00:00Z");
AddPayment("Cash", 80.00, "2025-07-23T15:30:00Z");
AddPayment("Credit Card", 200.00, "2025-07-25T16:10:00Z");
AddPayment("PayMaya", 120.50, "2025-07-21T17:20:00Z");
AddPayment("PayPal", 300.00, "2025-07-28T18:00:00Z");


paymentRecords.sort((a, b) => b.Amount - a.Amount);

// Display payment history
function PaymentHistory() {
    paymentRecords.forEach(record => {
        console.log("\nType of Payment: " + record.Type + 
                    "\nAmount: ₱" + record.Amount + 
                    "\nTimestamp: " + record.Timestamp);
    });
}

console.log("-------Payment History------")

PaymentHistory();
