const express = require('express');
const cors = require('cors');
const index = require('./routes/index');
class App {
    constructor() {
        this.app = express();
        this.middlewares();
        this.routes();
    }

    middlewares() {
        this.app.use(cors());
        this.app.use(express.json());
    }

    routes() {
        this.app.use('/index', index);
    }
}

module.exports = new App().app;