const http = require('http')


const server = http.createServer((res, req) => {
    const { url, method, headers } = req
    console.log(url, method, headers);

    res.setHeader('Content-Type', 'text/htm');

});

server.listen(3000);
