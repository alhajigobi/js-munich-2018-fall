

function breakIt() {
    for (let i = 0; i < 100; i++) {
        document.writeln(i + "<br>" );
        if (i == 45) {
            break;
        }
    }
}

function continueIt(){
    let floors = 28;
    for (let i=0; i<=floors;i++){
        if(i == 13){
            continue;
        }
        document.writeln("At floor: " + i + "<br>");
    } 
}


function countDown() {
    for (let i=25; i > 0; i--){
        document.writeln("Count down " + i + "!<br>");
    } 
}
countDown();


