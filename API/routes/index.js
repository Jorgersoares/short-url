const controller = require('../controllers/shorturl_controllers');
const express = require('express');
const routes = express.Router();

routes.post('/', controller.shortUrl);
routes.get('/:id', controller.getUrl);

module.exports = routes;
