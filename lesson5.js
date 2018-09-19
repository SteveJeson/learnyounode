const fs = require('fs');
const dir = process.argv[2];
let ext = process.argv[3];
if(ext.indexOf('.')===-1){
    ext = "."+ext;
}

fs.readdir(dir, 'utf-8', (err,data)=>{
    if(err) throw err;
    let filelist = [];
    data.forEach((f) =>{
        if(f.match(ext)){
            console.log(f)
        }
    },this);
});