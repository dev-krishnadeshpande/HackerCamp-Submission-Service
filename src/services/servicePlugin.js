const fastifyPlugin = require('fastify-plugin');
const SubmissionService = require("./submissionService");

async function submissionService(fastify, options) {
  const { repo } = fastify;
  const service = new SubmissionService(repo);
  fastify.decorate('service', service);
}

module.exports = fastifyPlugin(submissionService);