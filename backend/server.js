import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import userRoutes from "./src/routes/userRoutes.js";   // ye line yahan hi rahegi

dotenv.config();

// YE LINE SABSE UPAR HONI CHAHIYE — TU NE YE MISS KAR DIYA THA
const app = express();
app.use(express.json());

// MongoDB connect
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected Successfully!"))
  .catch(err => console.log("MongoDB Error:", err));

// Test route
app.get("/", (req, res) => {
  res.send("<h1>Bhai! Backend + Register ready hai!</h1>");
});

// YE LINE AB SAHI JAGAH PE HAI
app.use("/api/users", userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server chal raha hai → http://localhost:${PORT}`);
});