const c = require('fs');

c.readFile('./hello.txt', (err, data) => {
    if (err) {
        console.log('errrooooorrrrr');
    }
    console.log("async", data.toString())
})

const file = c.readFileSync('./hello.txt');
console.log ("sync", file.toString());


//APPEND
// c.appendFile('./hello.txt', 'this is soo cool', err => {
//     if (err){
//         console.log(err)
//     }
// })

//Write

// c.writeFile('bye.txt', 'sad to see you go', err => {
//     if(err){
//         console.log(err)
//     }
// })


//Delete
c.unlink('./bye.txt', err => {
    if (err) {
        console.log(err)
    }
    console.log('inception')
})