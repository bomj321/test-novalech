"user strict";
const passport = require("passport");
let express = require("express");
let router = express.Router();

const { ROLE } = require("../enums/role");
const validatorHandler = require("../middlewares/validator.handler.js");
const { checkRoles } = require("./../middlewares/auth.handler");

const {
  createEvaluationSchema,
  updateEvaluationSchema,
  getEvaluationSchema,
} = require("../schemas/evaluation.schema.js");

let EvaluationController = require("../controllers/evaluation.js");

router.post(
  "/evaluations",
  [
    passport.authenticate("jwt", { session: false }),
    checkRoles(ROLE.ADMIN, ROLE.MANAGER),
    validatorHandler(createEvaluationSchema, "body"),
  ],
  EvaluationController.save
);
router.get(
  "/evaluations",
  [
    passport.authenticate("jwt", { session: false }),
    checkRoles(ROLE.ADMIN, ROLE.MANAGER),
  ],
  EvaluationController.getAll
);
router.get(
  "/evaluations/:id",
  [
    passport.authenticate("jwt", { session: false }),
    checkRoles(ROLE.ADMIN, ROLE.MANAGER),
    validatorHandler(getEvaluationSchema, "params"),
  ],
  EvaluationController.getById
);

router.get(
  "/evaluations/employee/:id",
  [
    passport.authenticate("jwt", { session: false }),
    checkRoles(ROLE.ADMIN, ROLE.MANAGER),
    validatorHandler(getEvaluationSchema, "params"),
  ],
  EvaluationController.getByEmployee
);

router.patch(
  "/evaluations/:id",
  [
    passport.authenticate("jwt", { session: false }),
    checkRoles(ROLE.ADMIN, ROLE.MANAGER),
    validatorHandler(getEvaluationSchema, "params"),
    validatorHandler(updateEvaluationSchema, "body"),
  ],
  EvaluationController.update
);
router.delete(
  "/evaluations/:id",
  [
    passport.authenticate("jwt", { session: false }),
    checkRoles(ROLE.ADMIN, ROLE.MANAGER),
    validatorHandler(getEvaluationSchema, "params"),
  ],
  EvaluationController.delete
);

module.exports = router;
