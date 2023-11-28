const express = require("express");
const { MongoDBconnection } = require("./MongoDB/MongoDBconnection");
const { ErrorHandling } = require("./Controllers/ErrorHandlingControllers");
const { AuthRouter } = require("./Routers/Auth");
const { ChessRouter } = require("./Routers/Chess");
const App = express();
require("dotenv").config();

// port
const Port = process.env.PORT || 6000;

//Routers
App.use(express.json());
App.use(require("cors")());

App.use("/api/auth", AuthRouter);
App.use("/", ChessRouter);

// Error Handling Middleware
App.use(ErrorHandling);

// Database Connection
MongoDBconnection();

App.listen(Port, () => {
  console.log(`Server is Running on PORT ${Port}`);
});
