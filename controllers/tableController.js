const Table = require('../models/Table');

exports.getAllTables = async (req, res) => {
  const tables = await Table.find();
  res.json(tables);
};

exports.createTable = async (req, res) => {
  const table = new Table(req.body);
  await table.save();
  res.status(201).json(table);
};

exports.getTableById = async (req, res) => {
  const { id } = req.params;
  const table = await Table.findById(id);
  if (!table) {
    return res.status(404).json({ message: 'Table not found' });
  }
  res.status(200).json(table);
};

exports.updateTable = async (req, res) => {
  const { id } = req.params;
  const table = await Table.findByIdAndUpdate(id, req.body, {
    new: true,
    runValidators: true,
  });
  if (!table) {
    return res.status(404).json({ message: 'Table not found' });
  }
  res.status(200).json(table);
};

exports.deleteTable = async (req, res) => {
  const { id } = req.params;
  const table = await Table.findByIdAndDelete(id);
  if (!table) {
    return res.status(404).json({ message: 'Table not found' });
  }
  res.status(200).json({ message: 'Table deleted' });
};
