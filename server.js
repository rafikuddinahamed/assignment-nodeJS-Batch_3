var http = require('http')
var fs = require('fs')


var server = http.createServer((req, res)=>{
    if(req.url ==="/home"){
      const htmlFile = fs.readFileSync('node.html')
        res.writeHead(200, {'Content-Type':'text/html'})
        res.write(htmlFile)
        res.end()
    }
    else if(req.url === "/contact.html"){
      const contactFIle = fs.readFileSync('contact.html')
        res.writeHead(200, {'Content-Type':'text/html'})
        res.write(contactFIle)
        res.end()
    }
    else if(req.url ==="/node.html" || req.url ==="/"){
        const htmlFile = fs.readFileSync('node.html')
          res.writeHead(200, {'Content-Type':'text/html'})
          res.write(htmlFile)
          res.end()
      }
    else if(req.url === "/style.css"){
      const cssFile = fs.readFileSync('style.css')
        res.writeHead(200, {'Content-Type':'text/css'})
        res.write(cssFile)
        res.end()
    }
    else if(req.url === "/node.png"){
      const pngImg = fs.readFileSync('node.png')
        res.writeHead(200, {'Content-Type':'image/png'})
        res.write(pngImg)
        res.end()
    }
    else if(req.url === "/product"){
        res.writeHead(200, {'Content-Type':'text/heml'})
        res.write("This is Awesome Product")
        res.end()
    }
    else{
        res.writeHead(404, {'Content-Type':'text/html'})
        res.write("<h2> Page Not Found </h2>")
        res.end()
    
    }

}).listen(3000, ()=>{
  console.log("Success")
})



