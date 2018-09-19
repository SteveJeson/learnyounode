var readdirFun = require('./lesson6_dir');
var dir = process.argv[2];
var ext = process.argv[3];
readdirFun(dir, ext, (err, data) => {
    if(err){
        console.log(err)
    }
    data.forEach(function(f) {
        console.log(f);
    }, this);
});