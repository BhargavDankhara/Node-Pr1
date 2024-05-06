const http = require('http')

const fs = require('fs')

const port = 8060

const requestHandler = (req,res) => {

  let fileName = ""

  switch (req.url)
  {
    case '/':
      fileName = "./index.html"
      break;
    case '/about':
      fileName = "./about.html"
      break;
    case '/blog':
      fileName = "./blog.html"
      break;
    case '/contact':
      fileName = "./contact.html"
      break;

  }
  fs.readFile(fileName,(err,result) => {
    if (err) {
      res.end('Internal Server Error');
      return;
    }
    res.write(result);
    res.end();
  })
}

const server = http.createServer(requestHandler)

server.listen(port,(err) => {
  if (err)
  {
    console.log("server not sgtaring port");
    return false
  }
  console.log("server start at port " + port);
})