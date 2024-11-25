const Submission = require('../models/submissionModel');

class SubmissionRepository {
  async createSubmission(submissionDetails) {
    const { language, code, status } = submissionDetails;
    try {
      const submission = Submission.create({ language, code, status });
      return submission;
    }
    catch (error) {
      throw error;
    }
  }
}

module.exports = SubmissionRepository;
