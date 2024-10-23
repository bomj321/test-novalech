let FeedbackSchema = require("../models/feedback");

class FeedbackService {
  async save(body) {
    let feedbackSchema = new FeedbackSchema(body);
    const feedback = await feedbackSchema.save();
    return feedback;
  }
}

module.exports = FeedbackService;
