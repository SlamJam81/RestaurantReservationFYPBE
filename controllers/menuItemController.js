const MenuItem = require('../models/MenuItem');

exports.getAllMenuItems = async (req, res) => {
  const menuItems = await MenuItem.find();
  res.json(menuItems);
};

exports.createMenuItem = async (req, res) => {
  const menuItem = new MenuItem(req.body);
  await menuItem.save();
  res.status(201).json(menuItem);
};

exports.getMenuItemById = async (req, res) => {
  const { id } = req.params;
  const menuItem = await MenuItem.findById(id);
  if (!menuItem) {
    return res.status(404).json({ message: 'Menu Item not found' });
  }
  res.status(200).json(menuItem);
};

exports.updateMenuItem = async (req, res) => {
  const { id } = req.params;
  const menuItem = await MenuItem.findByIdAndUpdate(id, req.body, {
    new: true,
    runValidators: true,
  });
  if (!menuItem) {
    return res.status(404).json({ message: 'Menu Item not found' });
  }
  res.status(200).json(menuItem);
};

exports.deleteMenuItem = async (req, res) => {
  const { id } = req.params;
  const menuItem = await MenuItem.findByIdAndDelete(id);
  if (!menuItem) {
    return res.status(404).json({ message: 'Menu Item not found' });
  }
  res.status(200).json({ message: 'Menu Item deleted' });
};
