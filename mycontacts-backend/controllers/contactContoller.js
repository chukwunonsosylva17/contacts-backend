const Contact = require("../models/contactModel");
//@desc Get all contacts
//@route Get /api/contacts
//@access public
async function getContacts (req, res) { 

      const contacts = await Contact.find();
    res.status(200).json(contacts);
};

//@desc create New contact
//@route POST /api/contacts
//@access public
const createContact = async(req, res) => { 
    console.log("The request body is:", req.body);
    const {name, email, phone} = req.body;
    if(!name || !email || !phone ){ 
        res.status(400)
        throw  new Error ("All fields are mandatory !")
    }

    const contact = await Contact.create({ 
        name, 
        email,
        phone,
    });
    res.status(201).json(contact);
  };

//@desc Get contact
//@route GET /api/contacts/:id
//@access public
const getContact = async(req, res) => { 
    const contact = await Contact.findById(req.params.id);
    if(!contact) { 
        res.status(404);
        throw new Error("Contact not found");
    }
    res.status(201).json(contact);
};

//@desc Update contact
//@route PUT /api/contacts/:id
//@access public
const updateContact = async(req, res) => {  
   const contact = await Contact.findById(req.params.id);
   if(!contact) { 
        res.status(404);
        throw new Error("Contact not found");
    }
    
 const  updateContact = await Contact.findByIdUpdate( 
    req.params.id,
    req.body,
    {new: true }
 );


    res.status(201).json(updateContact );
};

//@desc Delete contact
//@route DELETE /api/contacts/:id
//@access public
const deleteContact = async(req, res) => { 
    res.status(201).json({ message: `Delete contact for ${req.params.id}`});
};

module.exports = { 
  getContacts,
  createContact, 
  getContact, 
  updateContact, 
  deleteContact 
};
