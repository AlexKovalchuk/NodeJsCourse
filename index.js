const http = require('http')
const path = require('path')
const fs = require('fs')

const server = http.createServer((req, res) => {
    if(req.method === 'GET') {
        res.writeHead(200, {
            'Content-Type': 'text/html; charset=utf-8'
        })

        if (req.url === '/') {
            fs.readFile(
                path.join(__dirname, 'views', 'index.html'),
                'utf-8',
                (err, content) => {
                    if(err) {
                        throw err;
                    }

                    res.end(content)
                }
            )
        } else if(req.url === '/about') {
            fs.readFile(
                path.join(__dirname, 'views', 'about.html'),
                'utf-8',
                (err, content) => {
                    if(err) {
                        throw err;
                    }

                    res.end(content)
                }
            )
        } else if(req.url === '/api/users') {
            res.writeHead(200,
                {
                    'ContentType': 'text/json'
                });
            const users = [
                {name: 'Alex', age: 28},
                {name: 'Hope', age: 19}
            ]
            res.end(JSON.stringify(users))
        }
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
