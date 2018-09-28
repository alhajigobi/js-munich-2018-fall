
/**
EXERCISE 7.0: FOR-LOOP
Code a function saySomething() to say hello once in the browser.
Then create another function with a for-loop to say hello 10 times.
Use document.writeln() write in the browser   
 */


function run() {
    for (let i = 0; i < 10; i++) {
        saySomething();
    }
}

function saySomething() {
    document.writeln("hello! ");
}

run()

