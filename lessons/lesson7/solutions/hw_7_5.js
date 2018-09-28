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
sortNumbers(5, 2, 9)
sortNumbers(8, 1000, 2)
sortNumbers(0, 22, 192)