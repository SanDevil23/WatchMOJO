const express = require("express");
const app = express();
const cors = require("cors")
const mongoose = require("mongoose")

const userRoutes = require("./routes/userRoutes.js")
require("dotenv").config()

app.use(express.json());
app.use(cors());
app.use("/api/v1", userRoutes)

mongoose
  .connect(process.env.MONGO_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("connection is sucessfull");
  })
  .catch(() => {
    console.log("error");
  });


const server = app.listen(process.env.PORT, () => {
  console.log(`Server is up and running on port ${process.env.PORT}`);
});
