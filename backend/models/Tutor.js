const mongoose = require("mongoose");

const TutorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please add a name"],
      maxlength: [50, "Name can not be more than 50 characters"],
    },
    subject: {
      type: mongoose.Schema.ObjectId,
      ref: "Category",
      required: true,
    },

    classes: {
      type: String,
      required: [true, "Please add a class"],
    },
    image: {
      type: String,
      required: [true, "Please add a image"],
    },
    schoolName: {
      type: String,
      required: [true, "Please add a schoolName"],
    },

    contact: {
      type: String,
      maxlength: [20, "Phone number can not be longer than 20 characters"],
    },
    email: {
      type: String,
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Please add a valid email",
      ],
    },
    fees: {
      type: String,
      required: [true, "Please add fees"],
    },
    user: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);
module.exports = mongoose.model("Tutor", TutorSchema);
