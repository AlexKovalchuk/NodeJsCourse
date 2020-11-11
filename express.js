const http = require('http');

const todos = [
    {id: 1, text: 'todo One'},
    {id: 2, text: 'todo Two'},
    {id: 3, text: 'todo three'},
];

const server = http.createServer((req,res) => {
    res.writeHead(200, {
        'Content-Type': 'applicaton/json',
        'X-Powered-By': 'Node.js'
    });

    let body = [];
    req.on('data', chunk => {
        body.push(chunk)
    }).on('end', () => {
        body = Buffer.concat(body).toString();
        console.log(body)
    })
    
    res.end(JSON.stringify({
        success: true,
        error: null,
        data: todos,
    }));
});


const PORT = 5000;
server.listen(PORT, () => {
    console.log(`server run on port ${PORT}`)
});