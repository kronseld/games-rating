const http = require('http');
const mainRouteController = require('./public/controllers/main');
const defaultRouteController = require('./public/controllers/default');
const gameRouteController = require('./public/controllers/game');
const voteRouteController = require('./public/controllers/vote');

const server = http.createServer((req, res) => {
    const url = req.url;
    switch (url) {
      case "/":
        mainRouteController(res, "/index.html", ".html");
        break;
      case "/game":
        gameRouteController(res);
        break;
      case "/vote":
          voteRouteController(req, res);
        break;
      default:
        defaultRouteController(res, url);
    }
  });

  server.listen(3005);