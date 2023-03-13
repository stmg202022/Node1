const http = require("http");
const fs = require("fs");

const index = fs.readFileSync("index.html", "utf-8"); //static html
const data = fs.readFileSync("data.json", "utf-8");
// const data2 = {
//   name: "samson",
// };

//================Static hosting =============================
// console.log(index);

// const server = http.createServer((req, res) => {
//   console.log("Starting server");

//   console.log(req.url);
//   res.setHeader("Dummy", "Dummy value");

//   //   res.setHeader("Content-Type", "text/html");
//   //   res.end("<h1>Hello</h1>");
//   //   res.end(index);

//   //   res.end(JSON.stringify(data2));
//   res.setHeader("Content-type", "application/json");
//   res.end(data);
// });

//================================================================

const server = http.createServer((req, res) => {
  console.log(req.url);

  switch (req.url) {
    case "/":
      res.setHeader("Content-type", "text/html");
      res.end(index);
      break;
    case "/api":
      res.setHeader("Content-Type", "application/json");
      res.end(data);
      break;
    default:
      res.writeHead(404);
      res.end();
  }
});

server.listen(8080);
