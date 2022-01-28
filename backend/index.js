const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const routes = require("./Routers/index");

require("dotenv").config();

const app = express();

const uri = process.env.ATLAS_URI;

mongoose.connect(
  uri,
  // {
  // mongoose new version mein use nhi kerte

  //   useNewUrlParser: true,
  //   useCreateIndex: true,
  //   useUnifiedTopology: true,
  //   useFindAndModify: false,
  // },
  (err) => console.log(console.log("Connection created", err))
);
app.use(cors());
app.use(express.json());

app.use("/", routes);

const port = process.env.PORT;

app.listen(port, () => {
  console.log("server started", port);
});
