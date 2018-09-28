
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
    if(payment > 100){
        return 0;
    } else if (payment >= 50){
        return 5;
    } else {
        return 10;
    }
}

alert("Shipping fee = " + getShippingFee(120)); // shows "Shipping fee = 0"
alert("Shipping fee = " + getShippingFee(100)); // shows "Shipping fee = 5"
alert("Shipping fee = " + getShippingFee(51)); // shows "Shipping fee = 5"
alert("Shipping fee = " + getShippingFee(50)); // shows "Shipping fee = 5"
alert("Shipping fee = " + getShippingFee(45)); // shows "Shipping fee = 10"
alert("Shipping fee = " + getShippingFee(6)); // shows "Shipping fee = 10"