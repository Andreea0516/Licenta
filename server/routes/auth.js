const router = require("express").Router();
const User = require("../models/User");

router.post("/register", async (req, res) => {
  try {
    const newUser = new User({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });

    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(500).json({ message: "Eroare la înregistrare", error: err });
  }
});

router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (!user) return res.status(400).json({ message: "Utilizator inexistent" });

    if (user.password !== req.body.password) {
      return res.status(400).json({ message: "Parolă greșită" });
    }

    const { password, ...userData } = user._doc;
    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json({ message: "Eroare la login", error: err });
  }
});

module.exports = router;
