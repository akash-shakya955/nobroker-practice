import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import userRoutes from "./src/routes/userRoutes.js";
import propertyRoutes from "./src/routes/propertyRoutes.js";

// PEHLE APP BANAO — YE SABSE UPAR HONA CHAHIYE!!!
const app = express();

// Ab app bani hai — ab usme features daal sakte hain
app.use(express.json());
dotenv.config();

// MongoDB connect
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected Successfully!"))
  .catch(err => console.log("MongoDB Error:", err));

// Test route
app.get("/", (req, res) => {
  res.send("<h1>Bhai! Backend + Register + Property ready hai!</h1>");
});

// AB ROUTES LAGA SAKTE HAIN — KYUNKI APP BAN CHUKI HAI
app.use("/api/users", userRoutes);
app.use("/api/properties", propertyRoutes);

// Server start
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server chal raha hai → http://localhost:${PORT}`);
});