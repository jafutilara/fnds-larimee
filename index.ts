const express = require("express");
const chalk = require("chalk");
const bodyParser = require("body-parser");
const logger = require("morgan");

const server = express();

import * as _ from "./config";

import { router } from "./routes/router";

server.use(express.static('assets'));
server.use('/', router);
server.set('view engine', 'ejs');
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));
server.use(logger('dev'));

Promise.resolve(server.listen(8080)).then( async () => {
    console.log(`Server started... ${chalk.bold.green("[OK]")}`);
});