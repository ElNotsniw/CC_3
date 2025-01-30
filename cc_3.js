// Task 1 - Product Price Management

let prices = [34, 76, 58, 22, 91];         // Original Output
prices.unshift (30);                       // Adds 30 to the beginning of the array
prices.shift();                            // Deletes the beginning value
console.log("Updated Prices:", prices);    // Updated Prices

// Task 2 - Modifying Customer Orders

let orders = [10, 15, 20, 25, 30];                                                      // Original Output
orders[2] += 5;                                                                         // Adding 5 to the third value, which is 20
let totalorders = orders.reduce ((acc, currentvalue) => acc + currentvalue, 0);         // Calculating the total number of orders
console.log("Updated Orders:", orders);                                                 // Updated Order list
console.log("Total Order Count:", totalorders);                                         // Total Order Count

// Task 3 - Employee Performance Tracking

let employee = {                           // Employee Information
    name: "Winston Le",
    role: "Assistant",
    performanceScore: 85,
    isActive: true
};
console.log("Employee:", employee);

employee.performanceScore = 90;           // Updating performance score
employee.promotionEligible = true;        

if (employee.performanceScore >=80) {     // if and else statements to determine promotion eligibility
    employee.promotionEligible = true
    console.log(`Winston Le is eligible for a promotion.`);
} else {
    console.log(`Winston Le is not eligible for a promotion.`);
}

