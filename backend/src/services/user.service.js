const bcrypt = require("bcrypt");
const { ROLE } = require("../enums/role");
let UserSchema = require("../models/user");

class UserService {
  constructor() {}

  async save(data) {
    const hash = await bcrypt.hash(data.password, 10);
    let userSchema = new UserSchema({ ...data, password: hash });
    const newUser = await userSchema.save();
    const { password, ...user } = newUser._doc;

    return user;
  }

  async findEmployees() {
    const rta = await UserSchema.find({ role: ROLE.EMPLOYEE }).select(
      "-password"
    );
    return rta;
  }

  async findByEmail(email) {
    const rta = await UserSchema.findOne({ email });
    return rta;
  }
}

module.exports = UserService;
