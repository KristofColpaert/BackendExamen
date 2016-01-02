var requestHandlers = require('../modules/requestHandlers.js');

var handlers = {
    '/' : requestHandlers.rootHandler,
    '/api' : requestHandlers.apiHandler,
    '/file' : requestHandlers.fileHandler,
    '/upload' : requestHandlers.uploadHandler
};

module.exports = handlers;