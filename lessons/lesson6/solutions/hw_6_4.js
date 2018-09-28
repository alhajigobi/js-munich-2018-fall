
/*
Homework 6.4: else-ifs
Now do the same with three numbers!

     Add one more argument to your function
     Order all three into the right order
     For example: 5, 2, 9 becomes 9, 5, 2
    
     BONUS: Rewrite the function with switch statements. Look it up!
*/

function sortNumbers(x, y, z) {
    if (x > y && x > z) {
        if (y > z) {
            alert(x + ", " + y + ", " + z);
        }
        else {
            alert(x + ", " + z + ", " + y);
        }
    }
    else if (y > x && y > z) {
        if (x > z) {
            alert(y + ", " + x + ", " + z);
        }
        else {
            alert(y + ", " + z + ", " + x);
        }
    }
    else if (z > x && z > y) {
        if (x > y) {
            alert(z + ", " + x + ", " + y);
        }
        else {
            alert(z + ", " + y + ", " + x);
        }
    }
}

sortNumbers(2, 5, 9);    // prints out "9, 5, 2"
sortNumbers(8, 100, 2);  // prints out "100, 8, 2"
sortNumbers(192, 0, 84); // prints out "192, 84, 0" 


