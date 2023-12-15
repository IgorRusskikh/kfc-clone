const mongoose = require("mongoose");

module.exports = dbConnect = async () => {
  const connection = await mongoose.connect(
    "mongodb+srv://hitsname:2003Igor@kfc-cluster.99gn0jx.mongodb.net/?retryWrites=true&w=majority"
  );

  if (connection) {
    console.log("База данных подключена");
  }
};
