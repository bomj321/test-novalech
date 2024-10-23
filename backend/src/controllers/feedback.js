const FeedbackService = require("../services/feedback.service");
const service = new FeedbackService();

let controller = {
  save: async (req, res, next) => {
    try {
      const body = req.body;
      const feedback = await service.save(body);
      res.status(201).json(feedback);
    } catch (error) {
      next(error);
    }
  },
};
module.exports = controller;
