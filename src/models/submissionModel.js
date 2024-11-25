const mongoose = require('mongoose');

const submissionSchema = mongoose.Schema({
  language: {
    type: String,
    required: [true, "Language can't be empty!!!"]
  },
  code: {
    type: String,
    required: [true, "Code is required for the submission"]
  },
  status: {
    type: String,
    enum: ['Queued', 'Pending', 'Completed'],
    required: [true, "Status is mandatory"]
  }
})

module.exports = mongoose.model("Submission", submissionSchema);