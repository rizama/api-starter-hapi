const ExampleHandler = require('./handler');
const routes = require('./routes');

module.exports = {
    name: 'examples',
    version: '1.0.0',
    register: async (server, { validator }) => {
        const exampleHandler = new ExampleHandler(validator);
        server.route(routes(exampleHandler));
    },
};
