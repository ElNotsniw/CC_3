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






// Task 4 - Customer Feedback Records

let feedback = [                          // The original three feedbacks
    {
        customerName: "Connor",
        feedbackText: "I would recommend this place.",
        rating: "5/5"
    },
    {
        customerName: "Summer",
        feedbackText: "This place is alright.",
        rating: "3/5"
    },
    {
        customerName: "Mareion",
        feedbackText: "Love this place.",
        rating: "4/5"
    }
];

feedback.push({                           // The new addition to the array
    customerName: "Manh",
    feedbackText: "It needs more pizzazz.",
    rating: "3/5"
});

console.log("Customer Feedbacks:", feedback)





// Task 5 - Inventory Management System

let inventory = {                         // Inventory Object consist of three properties: Name, Stock, and Price
    itemName: "Phone",
    stockCount: 50,
    price: 999,

    calculateTotalValue: function () {    // Multiplying the stockCount and price to get the total value of all the phones
    return this.stockCount * this.price;
    }
};

console.log(`Item Name: ${inventory.itemName}`);
console.log(`Stock Count: ${inventory.stockCount}`);
console.log(`Price: $${inventory.price}`);

console.log(`Total Value: $${inventory.calculateTotalValue()}`)