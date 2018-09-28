

/*
Homework 5.1 from last lesson:
Build a function that compares positive numbers
    <li>Takes two numbers as arguments</li>
    <li>Returns <code>true</code> if they are equal</li>
    <li>But only if they are both positive numbers (greater than or equal 0)</li>
    <li>Otherwise, always return <code>false</code></li>
    <li>Add some comments to explain the code</li>
*/

function compare(x, y) {
    // Always
    if (x === y) {
        // Definitely x and y are the same
        if (x >= 0) {
            // Definitely x and y the same AND x positive
            if (y >= 0) {
                // 
                return true;
            }
        }
    }
    return false;
}

alert(compare(2, 3)); // return false
alert(compare(-3, 5)); // return false
alert(compare(3, -98)); // return false
alert(compare(0, 8)); // return false
alert(compare(1, 1)); // return true
alert(compare(-3, -3)); // return false

