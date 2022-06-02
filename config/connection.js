const mongoose = require("mongoose");

// need to complete after localhost".....
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
// Use this to log mongo queries being executed!
mongoose.set("debug", true);

module.exports = mongoose.connection;
