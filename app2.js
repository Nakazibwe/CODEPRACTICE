// const logger = require('./logger2');
// console.log(logger)
// logger.log('I love you, Grace')
// console.log(__dirname);
// console.log(__filename)

// Using the path parse method
// const path = require('path');
// const pathObj = path.parse(__filename);
// console.log(pathObj); 

//Working with the os module in nodejs
// const os = require('os');
// const totalmemory = os.totalmem();
// const freememory = os.freemem();
// console.log(`Your Mac total memory is  ${totalmemory}`);
// console.log(`Your Mac free memory is ${freememory}`);

//Working with the file system module. 
// const fs = require('fs');
// const files = fs.readdirSync('./')
// console.log(files);

// const files2 = fs.readdir('./', (err, files) => {
//     if (err) {
//         console.log(`You seem to have an error Grace`)
//         console.log(err)
//     } else {
//         console.log(`We cant seem to find any errors`)
//         console.log(files);
//     }
// });

const EventEmitter = require('events');
// const emiiter = new EventEmitter();

const Logger = require('./logger2');
const logger = new Logger();

//Register a listener 
logger.on('messageLogged', (arg) => {
    console.log('Listener called', arg);
});
logger.log('message')



