require('dotenv').config();

const express = require("express");
const routes = require("./routes/routes.js");
require("./db/dbConn.js");
const cors = require("cors");
const errorMiddleware = require("./middleware/error.js");

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use("/", routes);

// Middleware for error
app.use(errorMiddleware);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`BE is listening on port ${port}`)
})
