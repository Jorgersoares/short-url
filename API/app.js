const express = require('express');
const body_parser = require('body-parser');
const app = express();
const database = require('./database/connection')
const shorturl_routes = require('./routes/index')
const cors = require('cors');

//Middleware
app.use(body_parser.json());
app.use(body_parser.urlencoded({extended : true}));
app.use(cors())

//Database connection
database.db_con()

//Index
app.get('/', (req,res) => {
    res.status(200);
    res.type('.html');
    res.send(
        `<h1>Short url REST API</h1> 
        <p> Version - 1.0 </p> 
        <a href="https://documenter.getpostman.com/view/10068569/SWLiamji?version=latest">Documentação API</a>
      `
    );
});

//Routes
app.use('/', shorturl_routes);

//Server
let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}
app.listen(port);