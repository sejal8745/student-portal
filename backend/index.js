const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

const app = express();

const uri = process.env.ATLAS_URI;

mongoose.connect(
  uri,
  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  },
  (err) => console.log(console.log("Connection created", err))
);
app.use(cors());
app.use(express.json());

const port = process.env.PORT;

app.listen(port, () => {
  console.log("server started", port);
});
