const Workflow = require('../models/Workflow');

exports.getAll = async (req, res) => {
  const workflows = await Workflow.find();
  res.json(workflows);
};

exports.create = async (req, res) => {
  const { nome } = req.body;
  const novo = new Workflow({ nome });
  await novo.save();
  res.status(201).json(novo);
};

exports.update = async (req, res) => {
  const { id } = req.params;
  const { nome } = req.body;
  const updated = await Workflow.findByIdAndUpdate(id, { nome }, { new: true });
  if (!updated) return res.status(404).send("Workflow não encontrado");
  res.json(updated);
};

exports.remove = async (req, res) => {
  const { id } = req.params;
  const deleted = await Workflow.findByIdAndDelete(id);
  if (!deleted) return res.status(404).send("Workflow não encontrado");
  res.status(204).send();
};