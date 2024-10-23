let EvaluationSchema = require("../models/evaluation");

class EvaluationService {
  async save(body) {
    let evaluationSchema = new EvaluationSchema(body);
    const evaluation = await evaluationSchema.save();
    return evaluation;
  }

  async getAll() {
    const evaluations = await EvaluationSchema.find()
      .populate({
        path: "user feedback", // populate user
        select: "email role",
      })
      .populate("feedback");
    return evaluations;
  }

  async getById(id) {
    const evaluation = await EvaluationSchema.findById(id)
      .populate({
        path: "user", // populate user
        select: "email role",
      })
      .populate("feedback");
    return evaluation;
  }

  async getByEmployee(id) {
    const evaluations = await EvaluationSchema.find({ user: id }).populate(
      "feedback"
    );
    return evaluations;
  }

  async update(id, body) {
    const evaluation = await EvaluationSchema.findByIdAndUpdate(id, body);
    return evaluation;
  }

  async delete(id) {
    const evaluation = await EvaluationSchema.findOneAndDelete({ _id: id });
    return evaluation;
  }
}

module.exports = EvaluationService;
