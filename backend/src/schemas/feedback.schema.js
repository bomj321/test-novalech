const Joi = require("joi");

const title = Joi.string().min(1);
const description = Joi.string().min(1);

const createFeedbackSchema = Joi.object({
  title: title.required(),
  description: description.required(),
});

module.exports = {
  createFeedbackSchema,
};
