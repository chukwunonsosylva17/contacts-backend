const mongoose = require("mongoose");
const contactSchema = mongoose.Schema({ 
    name: { 
        type: String,
        requied: [true, "Please add the contact name"],
    },
    email : { 
        type: String,
        requied: [true, "Please add the contact email address"],
        unique: [true, "Email address already exist"],
    }, 
    password: { 
        type: String, 
        required: [ true, "Please add the user Password"]        
    },
},
{ 
  timestamps: true,
}
);

module.exports = mongoose.model("User",contactSchema);