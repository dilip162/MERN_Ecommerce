const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const authRouter = require("./routes/auth/auth-routes");

const app = express();

const PORT = process.env.PORT || 5000;

// middleware
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "DELETE", "PUT"],
    allowedHeaders: [
      "Content-Type",
      "Autherization",
      "Cache-Control",
      "Expires",
      "Pragma",
    ],
    credentials: true,
  })
);

app.use(cookieParser());
app.use(express.json());
app.use("/api/auth", authRouter);

// mongoDB connection
mongoose
  .connect(
    "mongodb+srv://dilipbaghel162:dilipbaghel2024@cluster0.xlzzk.mongodb.net/"
  )
  .then(() => {
    console.log("MongoDB connected!");
  })
  .catch((error) => {
    console.log(error);
  });

app.listen(PORT, () => {
  console.log(`App is running on port:${PORT} `);
});
