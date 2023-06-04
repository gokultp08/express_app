var mongoose = require("mongoose");
require("dotenv").config();

var isProdEnv = process.env.NODE_ENV === "PRODUCTION";

var JWT_KEY = process.env.JWT_SECRET || "LOREM_IPSUM";

var PORT = process.env.PORT || 3000;

async function setUpMongoose() {
  await mongoose.connect(process.env.MONGO_URL);
}

const config = { isProdEnv, PORT, setUpMongoose, JWT_KEY };

module.exports = config;
