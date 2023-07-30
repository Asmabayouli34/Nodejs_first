require("dotenv").config();
require("./database/database.js").connect();
const express = require("express");
const router = require("./routes/index");

const app = express();
const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send({ message: "Hello, nodemon!" });
});

app.listen(port, () => {
  console.log(`app is listening at http://localhost:${port}`);
});
app.use("/api", router);