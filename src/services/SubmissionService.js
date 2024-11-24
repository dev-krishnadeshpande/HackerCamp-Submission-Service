class SubmissionService {
  constructor(repo) {
    this.repo = repo;
  }

  async createSubmission() {
    return await this.repo.createSubmission();
  }
}

module.exports = SubmissionService;