const http = require('http')

const server = http.createServer((req, res) => {
    console.log(req.url)

    res.write('<h1>Aelx, Hello from NodeJS</h1>')
    res.end(`
        <div style="background: red; width:500px; height: 400px; text-align: center; font-size:30px;">The End</div>
    `);
})

server.listen(3000, () => {
    console.log('Server is running...')
});
