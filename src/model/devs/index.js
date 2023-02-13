const { Schema, model } = require("mongoose");

const DevSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    user: {
      type: String,
      required: true,
    },
    bio: String,
    avatar: {
      type: String,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);
module.exports = model("Devs", DevSchema);
