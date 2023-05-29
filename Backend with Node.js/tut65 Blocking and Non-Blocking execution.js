// Synchronous or blocking - executed line by line


// Asynchronous or non-blocking - line by line execution not guaranteed, callbacks will fire
// fs.readfile syntax
// import { readFile } from 'node:fs';

// readFile('/etc/passwd', (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

const fs = require('fs')
fs.readFile("dele.txt", 'utf-8', (err, data)=> {
    console.log(err, data);
}); //this is will when all function call is completed
//above line is being and this line don't want to wait so it will get executed first, and above line when processed get executed
console.log("This is a message"); 

// There are dangers in using both blocking and non blocking