const Joi = require('joi');

const ExamplePayloadSchema = Joi.object({
    example: Joi.string().required()
});

module.exports = { ExamplePayloadSchema };
