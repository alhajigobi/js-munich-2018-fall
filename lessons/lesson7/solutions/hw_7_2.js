
/*
Exercise 7.2: while-loop

Code a function named getBigNumber
Keep prompting the user to type in a number
Only stop asking if the number is bigger than 1000
Otherwise prompt the user again

*/

function getBigNumber() {
    let number = 0;
    while (number < 1000) {
        number = prompt("Give me a number");
        console.log("Received number: " + number);
    }
    alert(number + " is bigger than 1000");
}
getBigNumber();


