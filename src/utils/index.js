const ClientError = require('../exceptions/ClientError');

const responseError = (error, h) => {
    if (error instanceof ClientError) {
        const response = h.response({
            status: 'fail',
            message: error.message,
        });
        response.code(error.statusCode);
        return response;
    }

    // Server ERROR!
    const response = h.response({
        status: 'error',
        message: 'Sorry, something happens in our server.',
    });
    response.code(500);
    console.error(error);
    return response;
};

module.exports = { responseError };
