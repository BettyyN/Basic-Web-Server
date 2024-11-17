const http= require("http")
const path=require("path")
const fs=require("fs")

const server=http.createServer((req,res) => {
    res.writeHead(200, { "Content-Type": "application/json" });
    const filepath=path.join(__dirname,'data.json');
    fs.readFile(filepath,'utf8',(err,data)=>{
        if(err){
            res.statusCode=500;
             return res.end(JSON.stringify({ error: "Error reading the data file" }));
        }

        const jsonData = JSON.parse(data);

         if (req.url === "/name" || req.url === "/" && req.method==='GET') {
           res.statusCode = 200; 
           res.end(JSON.stringify({ name: jsonData.name }));
         } else if (req.url === "/hobby" && req.method === "GET") {
           res.statusCode = 200;
           res.end(JSON.stringify({ hobby: jsonData.hobby }));
         } else if (req.url === "/dream" && req.method === "GET") {
           res.statusCode = 200;
           res.end(JSON.stringify({ dream: jsonData.dream }));
         } else {
           res.statusCode = 404;
           res.end(JSON.stringify({ error: "Route not found" }));
         }
    });
})
server.listen((3000),() =>{
    console.log('Server is running on port 3000')
})