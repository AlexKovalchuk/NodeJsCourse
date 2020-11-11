const http = require('http');

const todos = [
    {id: 1, text: 'todo One'},
    {id: 2, text: 'todo Two'},
    {id: 3, text: 'todo three'},
];

const server = http.createServer((req,res) => {
    res.writeHead(404, {
        'Content-Type': 'applicaton/json',
        'X-Powered-By': 'Node.js'
    })
    
    res.end(JSON.stringify({
        success: false,
        error: 'Not Found',
        data: null,
    }));
});


const PORT = 5000;
server.listen(PORT, () => {
    console.log(`server run on port ${PORT}`)
});