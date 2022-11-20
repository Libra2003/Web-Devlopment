const fs = require("fs");
let text = fs.readFileSync("dele.txt", "utf-8");
console.log(text);
text = text.replace("Zain", "Ali");
console.log(text);

console.log("Creating a new File");
fs.writeFileSync("zain.txt",text);
