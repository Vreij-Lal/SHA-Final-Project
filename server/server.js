//getting express
const express = require("express");

//running express
const app = express();

//body parser middleware initialization
const bodyParserMiddleware = require("body-parser");
app.use(bodyParserMiddleware.json());

//initializing port number
const PORT = 8080;

//initializing cors policy
const cors = require("cors");
app.use(cors({ origin: "*" }));

//getting auth routes
const authRoute = require("./routers/authRoute");
app.use("/auth", authRoute);

//listening on the following port
app.listen(PORT, () => console.log("listening"));
