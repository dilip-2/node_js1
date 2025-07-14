const fs = require("fs");
fs.readFile('myfile.txt' , 'utf-8', (err , data) =>{
    if(err){
        console.log("error reading file"  + err);
        return;
    }
    console.log('file contect  :' + data);
});
console.log('reading file...  ( this runs first)');
