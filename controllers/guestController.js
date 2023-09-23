const Guest = require('../models/Guest');

exports.getAllGuests = async (req, res) => {
  const guests = await Guest.find();
  res.json(guests);
};
  
exports.createGuest = async (req, res) => {
  const guest = new Guest(req.body);
  await guest.save();
  res.status(201).json(guest);
};

exports.getGuestById = async (req, res) => {
    const { id } = req.params;
    const guest = await Guest.findById(id);
    if (!guest) {
      return res.status(404).json({ message: 'Guest not found' });
    }
    res.status(200).json(guest);
  };

exports.updateGuest = async (req, res) => {
  const { id } = req.params;
  const guest = await Guest.findByIdAndUpdate(id, req.body, {
    new: true,
    runValidators: true,
  });
  if (!guest) {
    return res.status(404).json({ message: 'Guest not found' });
  }
  res.status(200).json(guest);
};

exports.deleteGuest = async (req, res) => {
  const { id } = req.params;
  const guest = await Guest.findByIdAndDelete(id);
  if (!guest) {
    return res.status(404).json({ message: 'Guest not found' });
  }
  res.status(200).json({ message: 'Guest deleted' });
};
