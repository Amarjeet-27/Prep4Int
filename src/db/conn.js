const mongoose = require("mongoose");

mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    console.log("connection success at port number: ", process.env.PORT)
  )
  .catch((err) => console.log(err));
