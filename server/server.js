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

//listening on the following port
const server = app.listen(PORT, () => console.log("listening"));

//getting auth routes
const authRoute = require("./routers/authRoute");
const userRoute = require("./routers/userRoute");
const postsRoute = require("./routers/postRoute");
const chatRoute = require("./routers/chatRoute");
app.use("/auth", authRoute);
app.use("/user", userRoute);
app.use("/posts", postsRoute);
app.use("/chats", chatRoute)


const { Server } = require("socket.io");

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    method: ["GET", "POST"],
  },
});


const Chat = require("./models/chatsModel");
io.on("connection", (socket) => {

    socket.on("send_message", async (data) => {
      const chat = await Chat.findOne({ _id: data.commonChatId });
      if (chat) {
        chat.ChatSender.push(data.username);
        chat.chats.push(data.message);
        await chat.save();
      }
  });
});
