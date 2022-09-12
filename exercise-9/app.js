const { createServer } = require("node:http");

function createApp() {
  return createServer((request, response) => {
    response.statusCode = 200;

    response.setHeader("Content-Type", "text/html");

    const htmlResponseBody = "Welcome to the World Wide Web!";

    response.end(htmlResponseBody);
  });
}

module.exports = createApp;
