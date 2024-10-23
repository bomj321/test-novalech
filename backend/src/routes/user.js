"user strict";
const passport = require("passport");
let express = require("express");
let router = express.Router();

const { ROLE } = require("../enums/role");
const { checkRoles } = require("./../middlewares/auth.handler");

const UserController = require("../controllers/user.js");

router.get(
  "/employees",
  [
    passport.authenticate("jwt", { session: false }),
    checkRoles(ROLE.ADMIN, ROLE.MANAGER),
  ],
  UserController.getEmployees
);

module.exports = router;
