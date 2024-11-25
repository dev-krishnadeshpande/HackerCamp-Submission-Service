class SubmissionService {
  constructor(repo) {
    this.repo = repo;
  }

  async createSubmission(submissionDetails) {
    return await this.repo.createSubmission(submissionDetails);
  }
}

module.exports = SubmissionService;