// Registered Product List
let Products = [
    { ProductName: "Laptop", Stock: 0 },
    { ProductName: "Bag", Stock: 0 },
    { ProductName: "Mouse", Stock: 0 },
    { ProductName: "Monitor", Stock: 0 },
    { ProductName: "Keyboard", Stock: 0 },
    { ProductName: "Tablet", Stock: 0 },
    { ProductName: "Charger", Stock: 0 }
];

// Transaction Record
let Transactions = [];

function AddTransaction(productName, type, qty) {
    const product = Products.find(p => p.ProductName === productName);

    if (!product) {
        console.log(` Product '${productName}' not found.`);
        return;
    }

    if (type !== 'in' && type !== 'out') {
        console.log(" Invalid transaction type. Use 'in' or 'out'.");
        return;
    }

    let currentStock = GetCurrentStock(productName);

    if (type === 'out' && qty > currentStock) {
        console.log(` Cannot dispatch ${qty} '${productName}'. Only ${currentStock} in stock.`);
        return;
    }

    // Push to transaction list
    Transactions.push({ item: productName, type: type, qty: qty });

    
    product.Stock = GetCurrentStock(productName);

    console.log(` Transaction recorded: ${type === 'in' ? 'IN' : 'OUT'} ${qty} of '${productName}'`);
}


function GetCurrentStock(item) {
    let stock = 0;
    Transactions.forEach(t => {
        if (t.item === item) {
            stock += (t.type === 'in') ? t.qty : -t.qty;
        }
    });
    return stock;
}

// Display all product stock levels
function DisplayInventory() {
    console.log("\n Current Product Inventory:");
    Products.forEach(product => {
        product.Stock = GetCurrentStock(product.ProductName); // refresh live stock
        console.log(`- ${product.ProductName}: ${product.Stock} in stock`);
    });
}

// View full transaction history
function DisplayTransactionHistory() {
    console.log("\n Transaction History:");
    Transactions.forEach(t => {
        console.log(`- ${t.type.toUpperCase()} | ${t.qty} x ${t.item}`);
    });
}


AddTransaction("Laptop", "in", 10);
AddTransaction("Bag", "in", 20);
AddTransaction("Laptop", "out", 5);
AddTransaction("Monitor", "out", 3); //  Should prevent
AddTransaction("Keyboard", "in", 15);
AddTransaction("Keyboard", "out", 5);
AddTransaction("Mouse", "in", 30);
AddTransaction("Tablet", "in", 12);
AddTransaction("Charger", "out", 1); //  Should prevent

// Display results
DisplayInventory();
DisplayTransactionHistory();
