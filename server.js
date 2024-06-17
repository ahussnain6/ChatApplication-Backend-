// server.js - Express server
require("dotenv").config();
const express = require("express");
const dbConnect = require("./utils/DB");
const cors = require("cors");
const errorMiddleware = require("./middleware/Error-middleware");
const Userroute = require("./Routes/Userroute");
const Grouproute = require("./Routes/Grouproute");
const Miscroute = require("./Routes/Miscroute");
const Messageroute = require("./Routes/Messageroute");

const app = express();
const PORT = process.env.PORT || 5000;

// CORS configuration
const corsOptions = {
  origin: "*",
  methods: "GET,POST,PUT,DELETE,PATCH,HEAD",
  credentials: true
};
app.use(cors(corsOptions));

// JSON parsing middleware
app.use(express.json());

// Default route
app.get("/", async (req, res) => {
  console.log("Server is running successfully!");
});

// API routes
app.use("/user", Userroute);
app.use("/misc", Miscroute);
app.use("/message", Messageroute);
app.use("/group", Grouproute);

// Error handling middleware
app.use(errorMiddleware);

// Database connection and server startup
dbConnect().then(() => {
  app.listen(PORT, () => {
    console.log(`Express server is running at port ${PORT}`);
  });
});
