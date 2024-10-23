"use strict";

const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const FeedbackSchema = Schema(
  {
    title: String,
    description: String,
  },
  { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);
module.exports = mongoose.model("Feedback", FeedbackSchema);
