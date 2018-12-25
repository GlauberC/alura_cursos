module.exports = app => {

    app.get('/', (req, resp) => {
        resp.send(`
            <html>
                <head>
                    <meta charset = "utf-8">
                    <title>Servidor Node</title>
                </head>
                <body>
                    <h1>Bem vindo ao servidor</h1>
                </body>
            </html>`
        );
    });
    
    app.get('/livros', (req, resp) => {
        resp.marko(
            require('../views/livros/lista/lista.marko'),
            {
                livros: [
                    {
                        id: 1,
                        titulo: 'Fundamentos do Node'
                    },
                    {
                        id: 2,
                        titulo: 'Node Avançado'
                    }
                ]
            }
        );
    });
    
}
