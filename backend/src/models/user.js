"use strict";

const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const UserSchema = Schema(
  {
    email: String,
    password: String,
    role: String,
  },
  { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);
module.exports = mongoose.model("User", UserSchema);
