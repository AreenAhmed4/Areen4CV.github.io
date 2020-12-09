let readlineSync = require("readline-sync");

let fs = require("fs-extra");

let MyModule = require("./MyModule5.12.2020.js"); // I call my own library not from npm

let name = readlineSync.question("What's your name?");

let password = readlineSync.question("What's your Password?", {
    hideEchoBack: true
});

console.log(name + 'password is' + password);


try {
    fs.copySync('./server5.12.2020.js', './server5.12.2020_bkp.js')
    console.log('success!')
} catch (err) {
    console.error(err)
}



try {
    fs.readdir('./', (err, files) => { //=> or write function befaore ()
        files.forEach(file => {
            console.log(file)
        });
    });
} catch (err) {
    console.error(err)
}


console.log(MyModule(100));


/*function (err,files){}
the same of
(err.files) => {}*/