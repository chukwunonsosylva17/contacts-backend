const Contact = require("../models/contactModel");
const contactService = require("../services/contact.service");
const { CreateContactSchema} = require("../schemas/contact.schema");

class ContactController {
  async getContacts(req, res) {
    console.log("The request body is");
    const contacts = await Contact.find();
    res.status(200).json(contacts);
  };

  async createContact(req, res) {
    console.log("The request body is:", req.body);
    // synchronous validation
      // const { value, error } = CreateContactSchema.validate(req.body);
      // console.log("The value is:", value);
      // if (error) {
      // const message = error.details[0].message
      // res.status(400)
      //   throw new Error(message)
      // }

    // asynchronous validation
      const value = await CreateContactSchema.validateAsync(req.body);

    const contact = await contactService.create(value);
    res.status(201).json(contact);
  };

  async getContact(req, res) {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
      res.status(404);
      throw new Error("Contact not found");
    }
    res.status(201).json(contact);
  };

  async updateContact(req, res) {

    const updateContact = await Contact.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!updateContact) {
      return res.status(404).send({
        success: false,
        message: "Contact not found",
      });
    }

    res.status(200).send({
      success: true, 
      data: updateContact
    });
  };

  async deleteContact(req, res) {
    res.status(201).json({ message: `Delete contact for ${req.params.id}` });
  };
}

module.exports = new ContactController();