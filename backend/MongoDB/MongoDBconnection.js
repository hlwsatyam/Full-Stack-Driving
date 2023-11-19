const { default: mongoose } = require("mongoose");

const MongoDBconnection = async () => {
  await mongoose
    .connect(process.env.MongoURI)
    .then(() => console.log("MongoDB Is Connected!!"))
    .catch(() => {
      console.log("MongoDB Disconnected!");
    });
};

module.exports = { MongoDBconnection };
