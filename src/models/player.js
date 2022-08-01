import mongoose from "mongoose";
const Schema = mongoose.Schema;

const playerSchema = new Schema(
  {
    uname: {
      type: String,
      required: true,
      unique: false,
      minlength: 1,
    },
    avatar: {
      type: String,
      required: true,
      unique: false,
      minlength: 1,
    },
    mail: {
      type: String,
      required: true,
      unique: true,
      minlength: 1,
    },
    phone: {
      type: String,
      required: true,
      unique: true,
      minlength: 9,
      maxlength: 13,
    },
    pwd: {
      type: String,
      required: true,
      unique: false,
      minlength: 8,
    },
  },
  {
    collection: "player",
    timestamps: true,
  }
);

const PlayerModel = mongoose.model("player", playerSchema);

export { PlayerModel };
