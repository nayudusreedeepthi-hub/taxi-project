const express = require("express");
const app = express();

app.use(express.json());

app.post("/login", (req, res) => {
  res.json({ message: "Login Success" });
});

app.post("/book", (req, res) => {
  res.json({ message: "Taxi booked" });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});