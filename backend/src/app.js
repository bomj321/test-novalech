//Requires
let express = require("express");
const {
  logErrors,
  errorHandler,
  boomErrorHandler,
} = require("./middlewares/error.handler");

//Execute express

let app = express();
app.use(express.json());

//Load route's files

let user_routes = require("./routes/user.js");
let auth_routes = require("./routes/auth.js");
let evaluation_routes = require("./routes/evaluation.js");
let feedback_routes = require("./routes/feedback.js");
let report_routes = require("./routes/report.js");

//CORS
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  res.header("Allow", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

//Rewrite Routes
app.use("/api", auth_routes);
app.use("/api", user_routes);
app.use("/api", evaluation_routes);
app.use("/api", feedback_routes);
app.use("/api", report_routes);

//Stategies
require("./utils/auth");

//Middlewares
app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

//Export Module
module.exports = app;
