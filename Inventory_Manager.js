let Products = [
    { ProductName: "Bald Shampoo", Stock: 25, Price: 10.00 },
    { ProductName: "Bioderm Soap", Stock: 25, Price: 20.00 },
    { ProductName: "TV", Stock: 4, Price: 45000.00 },
    { ProductName: "Backpack", Stock: 25, Price: 500.00 },
    { ProductName: "Notebook", Stock: 10, Price: 25.00 },
    { ProductName: "Ballpen", Stock: 50, Price: 5.00 },
    { ProductName: "Smartphone", Stock: 3, Price: 20000.00 }
];

let MinimumStock = 5;

function stockAlert() {
    let hasLowStock = false;
    Products.forEach(product => {
        if (product.Stock < MinimumStock) {
            console.log(`\n Low Stock: ${product.ProductName} - Only ${product.Stock} left`);
            hasLowStock = true;
        }
    });
    if (!hasLowStock) {
        console.log("\n All products are sufficiently stocked.");
    }
}

function Purchase(productname, quantity) {
    let product = Products.find(p => p.ProductName === productname);

    if (!product) {
        console.log(`\n Product "${productname}" Not Found`);
        return;
    }

    if (product.Stock >= quantity) {
        let totalCost = product.Price * quantity;
        product.Stock -= quantity; // Update stock

        console.log(`\n Purchase Successful:`);
        console.log(`- Product: ${product.ProductName}`);
        console.log(`- Quantity: ${quantity}`);
        console.log(`- Unit Price: ₱${product.Price.toFixed(2)}`);
        console.log(`- Total Cost: ₱${totalCost.toFixed(2)}`);
        console.log(`- Remaining Stock: ${product.Stock}`);
    } else {
        console.log(`\n Not enough stock for ${product.ProductName}. Only ${product.Stock} left.`);
    }
}

function ProductList() {
    console.log("\n Product Inventory:");
    Products.forEach(prolist => {
        console.log(`- ${prolist.ProductName} | Stock: ${prolist.Stock} | Price: ₱${prolist.Price.toFixed(2)}`);
    });
}


ProductList();

stockAlert();

Purchase("TV", 2);
Purchase("Bioderm Soap", 5);
Purchase("Backpack", 10);
Purchase("Smartphone", 2);  // Trigger low stock
Purchase("Ballpen", 5);

console.log("\n Updated Product List:");
ProductList();

stockAlert();
