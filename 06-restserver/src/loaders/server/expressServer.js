const express = require("express");
const morgan = require("morgan");
const config = require("../../config");
const userRoute = require("../../routes/users");

class ExpressServer {
  constructor() {
    this.app = express();
    this.port = config.port;
    this.basePath = config.api.prefix;

    this._middlewares();

    this._routes();
  }

  _middlewares() {
    this.app.use(express.json());
    this.app.use(morgan("tiny"));
  }

  _routes() {
    this.app.head("/status", (req, res) => {
      res.status(200).end();
    });

    this.app.use(`${this.basePath}/users`, userRoute);
  }

  async start() {
    this.app.listen(this.port, (error) => {
      if (error) {
        console.log(error);
        process.exit(1);
      }
    });
  }
}

module.exports = ExpressServer;
