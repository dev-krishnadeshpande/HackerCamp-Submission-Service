const submissionQueueProducer = require('../producers/submissionQueueProducer');
const submissionQueue = require('../queue/submissionQueue');

class SubmissionService {
  constructor(repo) {
    this.repo = repo;
  }

  async createSubmission(submissionDetails) {
    await submissionQueueProducer("SubmissionJob", submissionDetails);

    return await this.repo.createSubmission(submissionDetails);
  }
}

module.exports = SubmissionService;