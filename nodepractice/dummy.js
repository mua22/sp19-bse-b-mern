const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("<h1>Hello B Section</h1>");
    res.end();
  }
  if (req.url === "/api/products") {
    res.write(JSON.stringify(["Lenovo", "Toshiba"]));
    res.end();
  }
});
server.listen(3003);
console.log("server started at 3003....");
