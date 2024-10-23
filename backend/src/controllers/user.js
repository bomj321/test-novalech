const UserService = require("../services/user.service");
const service = new UserService();

let controller = {
  save: async (req, res, next) => {
    try {
      const body = req.body;
      const newUser = await service.save(body);
      const { password, ...user } = newUser._doc;
      return user;
    } catch (error) {
      next(error);
    }
  },

  getEmployees: async (req, res, next) => {
    try {
      const users = await service.findEmployees();
      res.status(200).json(users);
    } catch (error) {
      next(error);
    }
  },
};
module.exports = controller;
