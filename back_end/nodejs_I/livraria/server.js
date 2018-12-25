const http = require('http');
const servidor = http.createServer((req, resp) => {
    let html = '';
    if(req.url == '/'){
        html = `
        <html>
            <head>
                <meta charset = "utf-8">
                <title>Servidor Node</title>
            </head>
            <body>
                <h1>Bem vindo ao servidor</h1>
            </body>
        </html>`
    }else if (req.url == '/livros'){
        html = `
        <html>
            <head>
                <meta charset = "utf-8">
                <title>Listagem de livros</title>
            </head>
            <body>
                <h1>Listagem de livros</h1>
            </body>
        </html>`
    }
    resp.end(html)
});
servidor.listen(3000);

