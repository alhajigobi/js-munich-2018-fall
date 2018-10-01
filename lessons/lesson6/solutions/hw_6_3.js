
/*
 Homework 3.6 Prep:
Write a function, that:

     Takes 2 numbers as arguments
     Print them in one alert, ordered from largest to smallest
     For example: 2, 5 becomes 5, 2

             function sortNumbers(x, y) {
                 ...
             }
             sortNumbers(2, 5);    // prints out "5, 2"
             sortNumbers(8, 1000); // prints out "1000, 8"
             sortNumbers(22, 1);   // prints out "22, 1"

*/

function sortNumbers(x, y) {
    if (x === y) {
        alert("Sorted numbers: " + x + ", " + y);
    } else if (x > y) {
        alert("Sorted numbers: " + x + ", " + y);
    } else if (x < y) {
        alert("Sorted numbers: " + y + ", " + x);
    }
}

sortNumbers(2, 5);    // prints out "Sorted numbers: 5, 2"
sortNumbers(8, 1000); // prints out "Sorted numbers: 1000, 8"
sortNumbers(45, 45); // prints out "Sorted numbers: 45, 45"
sortNumbers(22, 1);   // prints out "Sorted numbers: 22, 1"
