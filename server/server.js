const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/users");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

mongoose
  .connect("mongodb://127.0.0.1:27017/licentaDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Conectat la MongoDB"))
  .catch((err) => console.error("Eroare la conectare MongoDB:", err));

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes); 


app.listen(PORT, () => {
  console.log(`Serverul rulează pe http://localhost:${PORT}`);
});
