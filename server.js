const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('./data/cities.json');
const middlewares = jsonServer.defaults();
const PORT = process.env.PORT || 3000;

server.use(middlewares);
server.use(router);

server.listen(PORT, () => {
  console.log(`JSON server is running on port ${PORT}`);
});
