const Contact = require("../models/contactModel");

class ContactService {
  async create(createContactDto) {
    const newContact = await Contact.create(createContactDto);
    return newContact;
  }
}

module.exports = new ContactService();