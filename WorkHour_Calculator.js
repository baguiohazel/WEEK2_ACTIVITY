function calculateWorkHours(employees) {
  for (let employee of employees) {
    let totalHours = employee.dailyHours.reduce((sum, hrs) => sum + hrs, 0);
    let status = totalHours < 40 ? " Underworked" : "OK";

    console.log(`Employee: ${employee.name}`);
    console.log("  Daily Hours:", employee.dailyHours.map(h => h + "hr").join(", "));
    console.log(`  Total Hours: ${totalHours}hr`);
    console.log(`  Status: ${status}`);
    console.log("------------------------");
  }
}

let employees = [
  { name: "Alice", dailyHours: [8, 8, 8, 8, 8] },
  { name: "Bob", dailyHours: [6, 7, 5, 6, 7] },
  { name: "Charlie", dailyHours: [9, 9, 9, 9, 9] }
];

calculateWorkHours(employees);
