

// server.js
import express from "express";

const app = express();

// JSON body samajhne ke liye
app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.send("<h1>Bhai! Backend chal gaya — NoBroker Practice Start! </h1>");
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server chal raha hai → http://localhost:${PORT}`);
});