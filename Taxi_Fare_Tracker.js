const rides= [
    {fare:120, distance: 10,time: '08:30AM'},
    {fare: 80, distance: 8,time: '08:40AM'},
    {fare:250, distance: 23, time: '08:59AM'},
    {fare:180, distance: 15, time: '09:30AM'},
    {fare:500, distance: 50, time: '10:10AM'},
    {fare:300, distance: 30, time: '01:30PM'}
 
];

function summarizeRides(rides) {
let totalEarnings= 0;
let longestRide= rides[0];
const hourFrequency ={};

for(const ride of rides){
    totalEarnings += ride.fare;


//Check long distance
if (ride.distance > longestRide.distance) {
    longestRide = ride;
}

const hour = ride.time.split(':') [0];

//Count ride per hour
hourFrequency[hour] = (hourFrequency[hour] || 0) + 1;
}

//Determin peak hour
let peakHour= null;
let maxRides = 0;

for(const hour in hourFrequency) {
    if (hourFrequency[hour] > maxRides) {
        maxRides= hourFrequency[hour];
        peakHour= hour;
    }
}

return {
    totalEarnings,
    longestRide,
    peakHour: `${peakHour}: 00 - ${peakHour}: 59`,
};
}



const summary = summarizeRides(rides);
console.log("------Taxi Fare Summary------");
console.log(`Total Earnings: ${summary.totalEarnings}`);
console.log(`Longest Rides: ${summary.longestRide.distance} km, Fare: ${summary.longestRide.fare}, Time: ${summary.longestRide.time}`);
console.log(`Peak Hour: ${summary.peakHour}`);


