const http = require("http");
const port = 8080;

http
  .createServer((req, res) => {
    res.writeHead(200, { "content-type": "text/html" });
    res.write("hello tester create server");
    res.end();
  })
  .listen(port, () => {
    console.log(`this server is listen to ${port}`);
  });
