"user strict";
const passport = require("passport");
let express = require("express");
let router = express.Router();

const { ROLE } = require("../enums/role");
const validatorHandler = require("../middlewares/validator.handler.js");
const { checkRoles } = require("./../middlewares/auth.handler");

const { createFeedbackSchema } = require("../schemas/feedback.schema.js");
const FeedbackController = require("../controllers/feedback.js");

router.post(
  "/feedback",
  [
    passport.authenticate("jwt", { session: false }),
    checkRoles(ROLE.ADMIN, ROLE.MANAGER),
    validatorHandler(createFeedbackSchema, "body"),
  ],
  FeedbackController.save
);

module.exports = router;
