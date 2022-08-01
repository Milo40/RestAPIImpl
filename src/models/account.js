import mongoose from "mongoose";
const Schema = mongoose.Schema;

const accountSchema = new Schema(
  {
    amount: {
      type: Number,
      required: true,
      unique: false,
      minlength: 1,
    },
    tokens: {
      type: Number,
      required: true,
      unique: false,
      minlength: 1,
    },
    player: {
      type: String,
      required: true,
      unique: true,
      minlength: 2,
      maxlength: 15,
    },
  },
  {
    timestamps: true,
    collection: "account",
  }
);

const AccountModel = mongoose.model("account", accountSchema);

export { AccountModel };
