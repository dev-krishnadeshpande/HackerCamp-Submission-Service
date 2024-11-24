const fastify = require('fastify')({ logger: true });
const app = require('./app');
const connectToDB = require('./config/dbConfig');
const { PORT } = require('./config/serverConfig');

fastify.register(app);

fastify.listen({ port: PORT }, function () {
  try {
    connectToDB();
  }
  catch (error) {
    console.log('error', error);
  }

  // console.log(`Server up at port ${port}`);
})

