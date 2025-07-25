let passengers = [
    { Name: "Tope", age: 20 },
    { Name: "JP", age: 60 },
    { Name: "Juswa", age: 5 },
    { Name: "Liza", age: 17 },
    { Name: "Mark", age: 65 },
    { Name: "Jenna", age: 3 }
];

let fare = 100;

function fareDiscount(age) {
    if (age <= 5) {
        return { fare: 0 }; // Free for children 5 and below
    } else if (age >= 6 && age <= 59) {
        let StudentFare = fare * 0.2; // 80% discount for students/adults
        return { fare: StudentFare };
    } else {
        let SeniorFare = fare * 0.5; // 50% discount for seniors
        return { fare: SeniorFare };
    }
}

function FarePass() {
    console.log("-----Passenger Fare List-----");


    passengers.forEach(p => {
        let result = fareDiscount(p.age);
        console.log(`Name: ${p.Name}, Age: ${p.age}, Fare: ₱${result.fare.toFixed(2)}`);
    });
}

FarePass();
