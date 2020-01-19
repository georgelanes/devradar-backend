const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const http = require("http");

const routes = require("./routes");
const { setupWebsockect } = require("./websocket");

const app = express();
const server = http.Server(app);

setupWebsockect(server);

mongoose
  .connect(
    "mongodb+srv://omnistack:Senha2020@omnistack-wdhtk.mongodb.net/omnistack_db?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 5000
    }
  )
  .then(res => console.log("Connected to DB"))
  .catch(err => console.log(err));

app.use(cors());
app.use(express.json());

app.use(routes);

server.listen(3333);
