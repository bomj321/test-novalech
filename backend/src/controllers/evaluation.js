const EvaluationService = require("../services/evaluation.service");
const service = new EvaluationService();

let controller = {
  save: async (req, res, next) => {
    try {
      const body = req.body;
      const evaluation = await service.save(body);
      res.status(201).json(evaluation);
    } catch (error) {
      next(error);
    }
  },

  getAll: async (req, res, next) => {
    try {
      const evaluations = await service.getAll();
      res.status(200).json(evaluations);
    } catch (error) {
      next(error);
    }
  },

  getById: async (req, res, next) => {
    try {
      const { id } = req.params;
      const evaluation = await service.getById(id);
      res.status(200).json(evaluation ?? []);
    } catch (error) {
      next(error);
    }
  },

  getByEmployee: async (req, res, next) => {
    try {
      const { id } = req.params;
      const evaluations = await service.getByEmployee(id);
      res.status(200).json(evaluations ?? []);
    } catch (error) {
      next(error);
    }
  },

  update: async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const evaluation = await service.update(id, body);
      res.status(200).json({ ...evaluation._doc, ...req.body });
    } catch (error) {
      next(error);
    }
  },

  delete: async (req, res, next) => {
    try {
      const { id } = req.params;
      const evaluation = await service.delete(id);
      res.status(200).json(evaluation ?? []);
    } catch (error) {
      next(error);
    }
  },
};
module.exports = controller;
