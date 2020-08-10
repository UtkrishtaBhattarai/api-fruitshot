const mongoose = require("mongoose");
const Notification = mongoose.Schema({
  //like sidlike model updated

  postedDate: Date,
  endDate: Date,
  title: String,
  description: String,
});
module.exports = mongoose.model("notification", Notification);
