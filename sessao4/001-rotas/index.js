import http from "node:http"

const server = http.createServer((req, res) => {
    const {url, method} = req

    if(url === '/' && method === 'GET') {
     return res.end(
        JSON.stringify({
            status: 200,
            body: "Bem vindo a Home",
        })
    );
}

    if(url === "/contato" && method === "GET") {
        return res.end(
        JSON.stringify({
            status: 200,
            body: "ENTRE EM CONTATO",
        })
    );
}

 res.statusCode = 404
 return res.end(
    JSON.stringify({
        status: 404,
        body: "404 (Not Found)",
    })
 )

});

server.listen(3000, () =>{
    console.log("Deus é bom")
})
