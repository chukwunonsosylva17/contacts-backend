const express = require("express");
const router = express.Router();
const contactController = require("../controllers/contact.controller");
const validator = require("../middleware/validator.middleware");
const { UpdateContactSchema } = require("../schemas/contact.schema");

router.route("/")
  .get(contactController.getContacts)
  .post(contactController.createContact);

router.route("/:id")
  .get(contactController.getContact)
  .put([validator(UpdateContactSchema)],contactController.updateContact)
  .delete(contactController.deleteContact);

module.exports = router