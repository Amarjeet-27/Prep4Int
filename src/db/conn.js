const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://ajchaurasia1214:Amarjeet@cluster0.5vykt9k.mongodb.net/reg",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("connection success"))
  .catch((err) => console.log(err));
