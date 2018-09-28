
/*
Exercise 7.3: while-loop
Rewrite the exercise of printMultiplicationTable with a while-loop
*/

function printMultiplicationTable(number) {
    console.log("MultiplicationTable of: " + number);
    let count = 1;
    while (count<= 10) {
        console.log(number + " x " + count + " = " + (number * count));
        count++;
    }
}

printMultiplicationTable(2);
printMultiplicationTable(3);
printMultiplicationTable(4);



