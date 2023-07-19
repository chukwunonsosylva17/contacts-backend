const Contact = require("../models/contactModel");
//@desc Get all contacts
//@route Get /api/contacts
//@access private
async function getContacts (req, res) { 
    console.debug('I can see')
      const contacts = await Contact.find({ user_id: req.user.id });
    res.status(200).json(contacts);
};

//@desc create New contact
//@route POST /api/contacts
//@access private
const createContact = async(req, res) => { 
    console.log("The request body is:", req.body);
    const {name, email, phone} = req.body;
    if(!name || !email || !phone ){ 
        res.status(400)
        return
    }

    const contact = await Contact.create({ 
        name, 
        email,
        phone,
        user_id: req.user.id
    });
    res.status(201).json(contact);
  };

//@desc Get contact
//@route GET /api/contacts/:id
//@access private
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
//@access private
const updateContact = async(req, res) => {  
   const contact = await Contact.findById(req.params.id);
   if(!contact) { 
        res.status(404);
        throw new Error("Contact not found");
    }
    
    if(contact.user_id.toString() !== req.user.id) { 
      res.status(403);
      throw new Error("User don't have permission to update other user contacts");  
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
//@access private
const deleteContact = async(req, res) => { 
    const contact = await Contact.findById(req.params.id);
    if (!contact) { 
        res.status(404);
        throw new Error("Contact not found");
    }
    if(contact.user_id.toString() !== req.user.id) { 
        res.status(403);
        throw new Error("User don't have permission to update other user contacts");  
      }
      await contact.deleteOne({ _id: req.params.id });
    res.status(201).json(contact);
};

module.exports = { 
  getContacts,
  createContact, 
  getContact, 
  updateContact, 
  deleteContact 
};
