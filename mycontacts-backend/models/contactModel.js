const mongoose = require("mongoose");

const contactSchema = mongoose.Schema({ 
    name: { 
      user_id: { 
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
      },
        type: String,
        requied: [true, "Please add the contact name"],
    },
    email : { 
        type: String,
        requied: [true, "Please add the contact email address"],
    },
    phone: {
        type: String,
        requied: [true, "Please add the contact phone number"],
    },
  },
  { 
    timestamps: true,
  }
);

module.exports = mongoose.model("Contact",contactSchema);