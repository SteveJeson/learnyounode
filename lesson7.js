const http = require("http");
const url = process.argv[2];
http.get(url, (res) => {
    res.setEncoding('utf-8');
    let rawData = '';
    res.on('data', (data) => {
        console.log(data);
    })
    res.on('error', () => {
        console.log(error);
    })
}).on('error', console.error)