/*
Homework 7.5: Draw a triangle
Write a function that constructs the following pattern in the console.log, 
using a nested for loop.

    *
    * *
    * * *
    * * * *
    * * * * *

Bonus: Add an argument x to the function, and contruct a triangle with x levels.
Bonus Bonus: Rewrite the function with while-loops
*/

let x, y, chr;
function drawStars() {
    for (x = 1; x <= 6; x++) {
        chr = '';
        for (y = 1; y < x; y++) {
            chr = chr + ("*");
        }
        console.log(chr);
    }
}

drawStars()

