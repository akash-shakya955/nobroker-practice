import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected Successfully!"))
  .catch(err => console.log("MongoDB Error:", err));

app.get("/", (req, res) => {
  res.send("<h1>Bhai! Backend + MongoDB dono live hain — Akash OP!</h1>");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server chal raha hai → http://localhost:${PORT}`);
});