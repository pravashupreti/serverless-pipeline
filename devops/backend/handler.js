const serverless = require("serverless-http");
const app = require("api/app.js") 
module.exports.handler = serverless(app);
