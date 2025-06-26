const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./routes/auth');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/licentaDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('✅ MongoDB conectat'))
.catch((err) => console.error('Eroare conectare MongoDB:', err));

app.use('/api/auth', authRoutes);

app.listen(PORT, () => {
  console.log(`🚀 Server pe http://localhost:${PORT}`);
});
