const fs = require('fs');
//Reading
fs.readFile('./love.txt', (err,data) => {
    if (err){
        console.log(err);
    }
    console.log(data.toString());
});
//Writing
fs.writeFile('./love.txt','I Love You Jaan',()=>{
    console.log('written');
});