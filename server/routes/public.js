"use strict";
var express_1 = require('express');
var publicRouter = express_1.Router();
exports.publicRouter = publicRouter;
publicRouter.get('/simple', function (request, response) {
    response.json({
        title: 'Greetings.',
        text: 'Hello Angular 2'
    });
});
