const Menu = require('../models/Menu');

exports.getAllMenus = async (req, res) => {
  const menus = await Menu.find();
  res.json(menus);
};

exports.createMenu = async (req, res) => {
  const menu = new Menu(req.body);
  await menu.save();
  res.status(201).json(menu);
};

exports.getMenuById = async (req, res) => {
  const { id } = req.params;
  const menu = await Menu.findById(id);
  if (!menu) {
    return res.status(404).json({ message: 'Menu not found' });
  }
  res.status(200).json(menu);
};

exports.updateMenu = async (req, res) => {
  const { id } = req.params;
  const menu = await Menu.findByIdAndUpdate(id, req.body, {
    new: true,
    runValidators: true,
  });
  if (!menu) {
    return res.status(404).json({ message: 'Menu not found' });
  }
  res.status(200).json(menu);
};

exports.deleteMenu = async (req, res) => {
  const { id } = req.params;
  const menu = await Menu.findByIdAndDelete(id);
  if (!menu) {
    return res.status(404).json({ message: 'Menu not found' });
  }
  res.status(200).json({ message: 'Menu deleted' });
};
