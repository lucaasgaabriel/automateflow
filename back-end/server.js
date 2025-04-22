require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const workflowRoutes = require('./routes/workflows');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log("MongoDB conectado"))
  .catch(err => console.error("Erro ao conectar MongoDB:", err));

app.use('/api/workflows', workflowRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));