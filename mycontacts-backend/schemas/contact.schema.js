
const Joi = require('joi');

exports.CreateContactSchema = Joi.object({
    name: Joi.string()
        .min(3)
        .max(30)
        .required(),

    phone: Joi.string().min(11).max(12).required(),

    email: Joi.string().email().required()
})

exports.UpdateContactSchema = Joi.object({
  name: Joi.string()
      .min(3)
      .max(30),

  phone: Joi.string().min(11).max(12),

  email: Joi.string().email()
})

exports.CreatePostSchema = Joi.object({
  title: Joi.string()
      .min(3)
      .max(30).required(),

  content: Joi.string().min(100).max(500),

  image: Joi.string()
})

