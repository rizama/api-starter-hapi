const InvariantError = require('../../exceptions/InvariantError');
const { ExamplePayloadSchema } = require('./schema');

const ExamplesValidator = {
    validateExamplePayload: (payload) => {
        const validationResult = ExamplePayloadSchema.validate(payload);

        if (validationResult.error) {
            throw new InvariantError(validationResult.error.message);
        }
    },
};

module.exports = ExamplesValidator;
