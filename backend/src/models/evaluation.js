"use strict";

const mongoose = require("mongoose");
const feedback = require("./feedback");

const Schema = mongoose.Schema;
const EvaluationSchema = Schema(
  {
    title: String,
    description: String,
    note: Number,
    user: { type: mongoose.Types.ObjectId, ref: "User" },
    feedback: { type: mongoose.Types.ObjectId, ref: "Feedback" },
  },
  { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);
module.exports = mongoose.model("Evaluation", EvaluationSchema);
