const { Schema, model } = require("mongoose");

const schema = new Schema(
  {
    name: { type: String },
    manufacturer: { type: String },
    price: { type: Number },
    amount: { type: Number },
    image: { type: String },
    // category: [{ type: Schema.Types.ObjectId, ref: "Category" }],
  },
  {
    timestamps: true,
  }
);

module.exports = model("Good", schema);
