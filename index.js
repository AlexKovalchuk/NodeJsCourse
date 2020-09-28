const http = require('http')

const server = http.createServer((req, res) => {
    if(req.method === 'GET') {
        res.writeHead(200, {
            'Content-Type': 'text/html'
        })
        res.end(`
            <h1>From</h1>
            <form method="post" action="/">
                <input name="title" type="type" />
                <button type="submit">Send</button>
            </form>
        `);
    } else if(req.method === 'POST') {
        const body = [];
        
        req.on('data', data => {
            body.push(Buffer.from(data))
        });

        req.on('end', () => {
            console.log(body.toString().split('=')[1])
            const message = body.toString().split('=')[1]
            res.end(`
            <div style="background: gray; width:100%; height: 400px; text-align: center; font-size:30px; margin: 0 auto;">
            <h1>your message: ${message}</h1>
            </div>
        `);
        })   
    }
})

server.listen(3000, () => {
    console.log('Server is running...')
});
