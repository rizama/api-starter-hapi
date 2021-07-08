const { responseError } = require('../../utils');

class ExampleHandler {
    constructor(validator) {
        this._validator = validator;

        this._message = 'It Works';

        this.getExampleHandler = this.getExampleHandler.bind(this);
        this.postExampleHandler = this.postExampleHandler.bind(this);
    }

    async getExampleHandler(request, h) {
        try {
            const response = h.response({
                status: 'success',
                message: 'Request Get Berhasil',
                data: this._message,
            });
            return response;
        } catch (error) {
            return responseError(error, h);
        }
    }

    async postExampleHandler(request, h) {
        try {
            this._validator.validateExamplePayload(request.payload);

            const { example } = request.payload;

            const response = h.response({
                status: 'success',
                message: 'Request Berhasil',
                data: {
                    example,
                },
            });
            return response;
        } catch (error) {
            return responseError(error, h);
        }
    }
}

module.exports = ExampleHandler;
