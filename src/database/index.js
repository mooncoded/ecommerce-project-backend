const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_URL, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

const connection = mongoose.connection;

connection.on("connected", function () {
  console.log("MongoDB database connection established successfully");
});

mongoose.Promise = global.Promise;

module.exports = mongoose;
