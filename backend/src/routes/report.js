"user strict";
const passport = require("passport");
let express = require("express");
let router = express.Router();
const { ROLE } = require("../enums/role");

const validatorHandler = require("../middlewares/validator.handler.js");
const { checkRoles } = require("./../middlewares/auth.handler");
const { getEvaluationSchema } = require("../schemas/evaluation.schema.js");
const EvaluationController = require("../controllers/evaluation.js");

router.get(
  "/reports/employee/:id",
  [
    passport.authenticate("jwt", { session: false }),
    checkRoles(ROLE.ADMIN, ROLE.MANAGER, ROLE.EMPLOYEE),
    validatorHandler(getEvaluationSchema, "params"),
  ],
  EvaluationController.getByEmployee
);

module.exports = router;
