require('dotenv').config();
const Hapi = require('@hapi/hapi');

const examples = require('./api/examples'); // Example Plugins
const ExamplesValidator = require('./validator/example'); // Example Validator

const init = async () => {
    const server = Hapi.server({
        port: process.env.PORT,
        host: process.env.HOST,
        routes: {
            cors: {
                origin: ['*'],
            },
        },
    });

    // Register Plugins
    await server.register([
        {
            plugin: examples,
            options: {
                validator: ExamplesValidator,
            },
        },
    ]);

    await server.start();
    console.log(`Server running on ${server.info.uri}`);
};

init();
