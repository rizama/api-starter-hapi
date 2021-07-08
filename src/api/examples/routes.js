const routes = (handler) => [
    {
        method: 'GET',
        path: '/examples',
        handler: handler.getExampleHandler,
    },
    {
        method: 'POST',
        path: '/examples',
        handler: handler.postExampleHandler,
    }
];

module.exports = routes;
