const express = require("express");
const cors=require("cors");
const app = express();
require("dotenv").config();

const connectDB=require("./config/db");

// connect database
connectDB();

// cors
app.use(cors({ origin: true, credentials: true }));


// routes
const task=require("./routes/taskRoutes");

// initialize middleware
app.use(express.json({ extended: false }));
app.get("/", (req, res) => res.send("Server up and running"));

app.use("/api/task",task);

// setting up port
const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log(`server is running on http://localhost:${PORT}`);
});