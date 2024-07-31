const express = require("express");
const mongoose = require("mongoose");
const blogRoute = require("./route/blogRoute");
const port = 3001;
const connectionString = "mongodb://localhost:27017/BlogDB";

mongoose
  .connect(connectionString)
  .then((res) => {
    console.log(`Server Connected on port ${port}`);
  })
  .catch((err) => {
    console.log(`Server not connected${err}`);
  });

const app = express();
app.use(express.json());
app.use("/api/blog", blogRoute);

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

module.export = app;
