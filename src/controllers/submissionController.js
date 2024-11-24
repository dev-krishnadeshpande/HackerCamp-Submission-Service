async function createSubmission(req, res) {
  const { service } = this;
  const response = await service.createSubmission();
  return res.status(200).send({ response });
}

module.exports = createSubmission;
