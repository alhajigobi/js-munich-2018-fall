
/*
 Exercise: 6.1 Complex conditionals
  Rewrite the function from the previous exercise using a <strong>single</strong> condition</li>
     
  Remember the conditionals are:
  x === y -- return true if the two numbers are equals
  x >= 0 -- but only if both numbers are positive
  y >= 0ƒ
  
   Hint: You need to combine them with &&, || or !
*/

function compare(x, y) {
    // Use one line. Notice that one of these comparison is _not_ necessary, 
    // can you tell which one?
    if (x === y && (x >= 0 && y >= 0)) {
        return true;
    }
    return false;
}

alert(compare(2, 3)); // return false
alert(compare(-3, 5)); // return false
alert(compare(3, -98)); // return false
alert(compare(0, 8)); // return false
alert(compare(1, 1)); // return true
alert(compare(-3, -3)); // return false

