
const { string } = require("joi");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productsSchema = new Schema(
  {
    UserName: {
      type: String,
      require: true,
    },
    password: {
      type: String,
      require: true,
    },

    firstName: {
      type: String,
      require: false,
    },
    lastName: {
      type: String,
      require: false,
    },
    phone: {
      type: Number,
      require: true,
    },
    email: {
      type: string,
      require: false,
    },
    address: {
      type: string,
      require: false,
    },
    avatar: {
      type: string,
      require: false,
    },
  },

  { timestamps: true }
);

const User = mongoose.model("products", productsSchema);
module.exports = User;
