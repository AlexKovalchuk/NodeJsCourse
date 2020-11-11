const http = require('http');

const todos = [
    {id: 1, text: 'todo One'},
    {id: 2, text: 'todo Two'},
    {id: 3, text: 'todo three'},
];

const server = http.createServer((req,res) => {
    res.setHeader('Content-Type', 'applicaton/json')
    res.setHeader('X-Powered-By', 'Node.js')
    
    res.end(JSON.stringify({
        success: true,
        data: todos,
    }));
});


const PORT = 5000;
server.listen(PORT, () => {
    console.log(`server run on port ${PORT}`)
});