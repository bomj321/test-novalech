const Joi = require("joi");

const id = Joi.string().min(1);
const title = Joi.string().min(1);
const description = Joi.string().min(1);
const note = Joi.number().integer();
const user = Joi.string().min(1);
const feedback = Joi.string().min(1);

const createEvaluationSchema = Joi.object({
  title: title.required(),
  description: description.required(),
  note: note.required(),
  user: user.required(),
});

const updateEvaluationSchema = Joi.object({
  title,
  description,
  note,
  user,
  feedback,
});

const getEvaluationSchema = Joi.object({
  id: id.required(),
});

module.exports = {
  createEvaluationSchema,
  updateEvaluationSchema,
  getEvaluationSchema,
};
