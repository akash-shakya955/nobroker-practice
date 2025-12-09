

import express from "express";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

// Ye route sirf logged-in user daal sakega
router.post("/", protect, (req, res) => {
  res.json({ message: `Property add kar di bhai! Owner: ${req.user.name}` });
});

export default router;