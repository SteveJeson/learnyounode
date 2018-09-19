const fs = require('fs');
const path = require('path');
function ReadDir(dir, ext, callback) {
    fs.readdir(dir, (err,data) => {
        if(err){
            return callback(err);
        }
        data = data.filter(function(file){
            return path.extname(file) === '.' + ext;
        })
        callback(null, data);
    })
}
module.exports = ReadDir;