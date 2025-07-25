function splitFare(totalFare, riders) {
    const totalDistance = riders.reduce((sum, rider) => sum + rider.distance, 0);
    const farePerKm= totalFare/ totalDistance; 


const fareBreakdown= riders.map(rider => {
    const amount = rider.distance * farePerKm; 
    return {
        name: rider.name,
        distance: rider.distance,
        farePerKm: farePerKm.toFixed(2),
        amountOwed: amount.toFixed(2)
    };
});

return fareBreakdown; 
}

const totalFare = 1400;
const riders = [
    {name: "Jay", distance: 10},
    {name: "Carlo", distance: 20},
    {name: "Racadag", distance: 5},
    {name: "Kemul", distance: 35}

];

const result = splitFare(totalFare, riders);

console.log(`Total Fare: ${totalFare}`);
console.log(`Fare per km: ${(totalFare/ riders.reduce((sum, r) => sum + r.distance, 0)).toFixed(2)} \n`);

result.forEach(rider => {
    console.log (`${rider.name}: ${ rider.distance} km * ${rider.farePerKm} = ${rider.amountOwed}`);
});
