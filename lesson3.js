const fs = require('fs');
const { Url } = require('url');
var abcUrl = process.argv[2];
let content = fs.readFileSync(abcUrl).toString();
let lineArray = content.split('\n');
console.log(lineArray.length-1);
