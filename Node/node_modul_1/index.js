const http = require("http");
const chalk = require("chalk");

const port = 3000;

const server = http.createServer((req, res) => {
  console.log("Request metod:", req.method);
  console.log("Request url:", req.url);

  res.end("Hello from server!!!");
});

server.listen(port, () => {
  console.log(chalk.green(`Server has been startes on port ${port}`));
});
