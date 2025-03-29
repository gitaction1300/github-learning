const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

// Health Check Endpoint
app.get("/health", (req, res) => {
  res.status(200).json({ status: "UP", message: "App is running!" });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

