const submissionQueue = require('../queue/submissionQueue');

module.exports = async function (name, payload) {
  await submissionQueue.add(name, payload);
}
