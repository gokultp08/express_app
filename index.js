var http = require("http"),
  path = require("path"),
  express = require("express"),
  bodyParser = require("body-parser"),
  mongoose = require("mongoose");
var router = require("express").Router();

var isProdEnv = process.env.NODE_ENV === "PRODUCTION";

var app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose.connect(process.env.MONGODB_URI);

router.use("/api", require("./routes"));

app.use((req, res, next) => {
  var err = new Error("Not Found");
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

var server = app.listen(process.env.PORT || 3000, function () {
  console.log("Server is running on" + server.address().port);
});
