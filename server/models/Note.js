const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  folder: { type: String, default: 'General' },
  tags: [{ type: String }],
}, { timestamps: true });

module.exports = mongoose.model('Note', noteSchema);
