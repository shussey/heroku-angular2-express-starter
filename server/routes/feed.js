"use strict";
var express_1 = require('express');
var uuid = require('node-uuid');
var feedRouter = express_1.Router();
exports.feedRouter = feedRouter;
feedRouter.post('/', function (request, response) {
    response.json({
        id: uuid.v4(),
        text: request.body.text,
        name: request.body.name
    });
});
feedRouter.delete('/:id', function (request, response) {
    response.json({
        id: request.params.id
    });
});
