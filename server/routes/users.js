const express = require("express");
const router = express.Router();
const User = require("../models/User");

router.get("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ message: "User not found" });
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const updated = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(updated);
  } catch (err) {
    res.status(500).json({ message: "Error updating user", error: err.message });
  }
});

router.put("/reset-password", async (req, res) => {
  const { email, oldPassword, newPassword } = req.body;

  console.log("Cerere resetare parolă:", req.body);

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: "Utilizator inexistent" });

    if (user.password !== oldPassword) {
      return res.status(400).json({ message: "Parola veche este greșită" });
    }

    user.password = newPassword;
    await user.save();

    res.status(200).json({ message: "Parolă actualizată cu succes" });
  } catch (err) {
    res.status(500).json({ message: "Eroare la resetare", error: err.message });
  }
});

module.exports = router;
