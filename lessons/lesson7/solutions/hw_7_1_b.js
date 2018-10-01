/*
Code a function named printOddFloors
Print out the odd floor label of a building on the broswer AND skip the 13th floor.
Hint look up and use the mod operator % e.g i%2
Don't forget to make the function call and use document.writeln
*/

function countDown() {
    for (let i=25; i > 0; i--){
        if(i % 2 == 0){
            continue;
        }
        document.writeln("At floor: " + i + "<br>");
        //document.writeln("Count down " + i + "!<br>");
    } 
}
countDown();