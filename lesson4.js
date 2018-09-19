const fs = require('fs');
const abcUrl = process.argv[2];
fs.readFile(abcUrl, "utf8", (err, data) => {
  if(err) throw err;
  let content = data.split('\n').length-1;
  console.log(content);	
});
