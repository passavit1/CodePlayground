const http = require("http");

http
  .createServer((req, res) => {
    res.writeHead(200, { "content-type": "text/plain" });
    res.write("hello test create function");
    res.end();
  })
  .listen(8080, () => {
    console.log(`this server is listening to port 8080`);
  });
