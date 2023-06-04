var mongoose = require("mongoose");
require("dotenv").config();

var isProdEnv = process.env.NODE_ENV === "PRODUCTION";

var PORT = process.env.PORT || 3000;

async function setUpMongoose() {
  await mongoose.connect(process.env.MONGO_URL);
}

const config = { isProdEnv, PORT, setUpMongoose };

module.exports = config;
