const http = require("http");
const app = require("./app.js");

const port = 5000
const server = http.createServer(app);

server.listen(process.env.PORT || port);


