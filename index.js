const http= require("http")
const server=http.createServer((req,res) => {
    res.writeHead(200,{ 'content-type': 'text/html'})
    const url= req.url
    if (url === "/name" || url==="/") {
        res.write("Betty")
        res.end()
    }
    else if(url==="/hobby"){
        res.write("Praying")
        res.end()
    }
    else if(url==="/dream"){
        res.write("My dream")
        res.end()
    }
    else{
        res.write("no such page")
        res.end
    }
})
server.listen((3000),() =>{
    console.log('Server is running')
})