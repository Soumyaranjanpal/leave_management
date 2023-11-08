require('dotenv').config();

const express = require("express");
const routes = require("./routes/routes.js");
require("./db/dbConn.js");
const cors = require("cors");
const errorMiddleware = require("./middleware/error.js");


process.on("uncaughtException", (err) => {
  console.log(`Error: ${err.message}`);
  server.close(() => {
    process.exit(1);
  })
})

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use("/", routes);

// Middleware for error
app.use(errorMiddleware);
// app.use((err, req, res, next) => {
//   console.error(err.stack);
//   res.status(500).send('Something went wrong!');
// });

const port = process.env.PORT || 3000;

const server = app.listen(port, () => {
  console.log(`BE is listening on port ${port}`)
})

process.on("unhandledRejection", (err) => {
  console.log(`Error: ${err.message}`);
  server.close(() => {
    process.exit(1);
  })
})