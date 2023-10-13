const jsonServer = require('json-server');
const cors = require('cors');
const server = jsonServer.create();
const router = jsonServer.router('./data/cities.json');
const middlewares = jsonServer.defaults();
const PORT = 5001;

const corsOptions = {
  origin: `globetrotters-demo.netlify.app`,
  optionSuccessStatus: 200,
};
server.use(cors(corsOptions));
server.use(middlewares);
server.use(router);

server.listen(PORT, () => {
  console.log(`JSON server is running on port ${PORT}`);
});
