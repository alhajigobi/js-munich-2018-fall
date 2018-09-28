
/**
Exercise 7.1: for-loop
      
Code a function named <span class="emphasis">printMultiplicationTable</span>
Takes 1 argument and prints the multiplication table for that number in the console log
e.g. 2x1=2<br>2x2=4<br>2x3=6<br>etc... until 2x10=20
Remember to use console.log("xxxxx")
Don't forget to make the function call.
 */


function printMultiplicationTable(number) {
    console.log("MultiplicationTable of: " + number)
    for (let j = 1; j <= 10; j++) {
        console.log(number + " x " + j + " = " + (number * j));
    }
}

printMultiplicationTable(2);
printMultiplicationTable(3);
printMultiplicationTable(4);

