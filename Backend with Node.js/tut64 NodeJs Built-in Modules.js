// import { readFileSync, writeFileSync } from "fs";
// import { writeFileSync,readFileSync } from 'fs';
const fs = require('fs');
let text = readFileSync("dele.txt", "utf-8");
text = text.replace("browser", "Rohan");

console.log("The content of the file is")
console.log(text);

console.log("Creating a new file...")
writeFileSync("rohan.txt", text);