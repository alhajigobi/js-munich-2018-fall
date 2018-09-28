/*
Exercise: 6.2 Complex conditionals</h3>
Build a function that calculates shipping fee for an order and return it.</p>

Argument: order amount in EUR
    amount > 100 EUR, free shipping
    amount >= 50 EUR, fee = 5 EUR
    amount < 50 EUR, fee = 10 EUR
    BONUS: add a boolean argument to indicate a discount of 20% on shipping
 */

function getShippingFee(payment){
   // FILL IN YOUR ANSWER HERE
   // HINT: Use if-else else-of clauses
}

// Test verifications
alert("Shipping fee = " + getShippingFee(120) + " euro"); // shows "Shipping fee = 0 euro"
alert("Shipping fee = " + getShippingFee(100) + " euro"); // shows "Shipping fee = 5 euro"
alert("Shipping fee = " + getShippingFee(51) + " euro"); // shows "Shipping fee = 5 euro""
alert("Shipping fee = " + getShippingFee(50) + " euro"); // shows "Shipping fee = 5 euro""
alert("Shipping fee = " + getShippingFee(45) + " euro"); // shows "Shipping fee = 10 euro""
alert("Shipping fee = " + getShippingFee(6) + " euro"); // shows "Shipping fee = 10 euro""