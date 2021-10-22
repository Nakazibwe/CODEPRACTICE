// function sayHelo(name){
//     console.log('Hello ' + name);
// }
// // sayHelo('gRACE');
// console.log(module); 
// const logger =  require('./logger');
// console.log(logger)
// logger.log('Fuckoff')

// const path = require('path');
// const pathObj = path.parse(__filename);
// console.log(pathObj);

// const os = require('os');
// const totalMemory = os.totalmem();
// const freeMemory = os.freemem();
// console.log(totalMemory);
// console.log(freeMemory);

// const fs = require('fs');
// const files = fs.readdirSync('./');
// console.log(files);

// fs.readdir('./',(err,files)=>{
//     if(err){
//         console.log('Error : ',err);
//     }else{
//         console.log('Result :',files);
//     }
// })
//Register a listener 
const EventEmitter = require('events');


const Logger = require('./logger');
const logger = new Logger();

//Register a listener
logger.on('messageLogged',(arg)=>{
    console.log('Listener Called',arg);
});

Logger.log('message');


