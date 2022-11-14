// Synchronous or blocking
// - line by line execution

// Asynchronous or non-blocking
// - line by line execution not guaranteed
// - callbacks will fire

const fs = require("fs");
fs.readFile("dele.txt","utf-8",(err,data)=>{
    console.log(err,data);
});
console.log("This is a Message" );

function greet(){
    console.log("This is a Message" );
}
 timeOut = setTimeout(greet,5000);
// console.log(timeOut);
