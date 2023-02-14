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
const userRoute = require("./routers/userRoute");
const postsRoute = require("./routers/postRoute");
app.use("/auth", authRoute);
app.use("/user", userRoute);
app.use("/posts", postsRoute);

//listening on the following port
app.listen(PORT, () => console.log("listening"));
