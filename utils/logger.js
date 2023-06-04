const config = require("./config");
const log = (...values) => {
  if (process.env.LOG_ENABLED === "true") {
    console.log(`${config.isProdEnv ? Date.now() : ""} ${values}`);
  }
};

const error = (...values) => {
  if (process.env.LOG_ENABLED === "true") {
    console.error(`${config.isProdEnv ? Date.now() : ""}  ${values}`);
  }
};

const logger = { log, error };

module.exports = logger;
