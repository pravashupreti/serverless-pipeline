const serverless = require("serverless-http");
const app = require("api/dist/index.js") 
module.exports.handler = serverless(app);
