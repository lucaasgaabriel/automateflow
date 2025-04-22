const mongoose = require('mongoose');

const workflowSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true,
  }
}, { timestamps: true });

module.exports = mongoose.model('Workflow', workflowSchema);