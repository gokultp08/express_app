var express = require("express");
var bodyParser = require("body-parser");
const config = require("./utils/config");
const logger = require("./utils/logger");

var app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("", require("./controllers/auth-controller.js"));
app.use("/user", require("./controllers/user-controller.js"));

logger.log("Initiating Mongo Connection");

config.setUpMongoose().then(
  (res) => {
    logger.log("Completing Mongo Connection");
  },
  (err) => {
    logger.log("Error Mongo Connection");
  }
);

app.use((req, res, next) => {
  var err = new Error("Request Not Found");
  err.status = 404;
  next(err);
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({
    errors: {
      message: err.message,
      error: err,
    },
  });
});

var server = app.listen(config.PORT, function () {
  console.log("Server is running on" + server.address().port);
});
