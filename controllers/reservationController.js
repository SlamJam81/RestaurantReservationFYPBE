const Reservation = require('../models/Reservation');

exports.getAllReservations = async (req, res) => {
  const reservations = await Reservation.find();
  res.json(reservations);
};

exports.createReservation = async (req, res) => {
  const reservation = new Reservation(req.body);
  await reservation.save();
  res.status(201).json(reservation);
};

exports.getReservationById = async (req, res) => {
  const { id } = req.params;
  const reservation = await Reservation.findById(id);
  if (!reservation) {
    return res.status(404).json({ message: 'Reservation not found' });
  }
  res.status(200).json(reservation);
};

exports.updateReservation = async (req, res) => {
  const { id } = req.params;
  const reservation = await Reservation.findByIdAndUpdate(id, req.body, {
    new: true,
    runValidators: true,
  });
  if (!reservation) {
    return res.status(404).json({ message: 'Reservation not found' });
  }
  res.status(200).json(reservation);
};

exports.deleteReservation = async (req, res) => {
  const { id } = req.params;
  const reservation = await Reservation.findByIdAndDelete(id);
  if (!reservation) {
    return res.status(404).json({ message: 'Reservation not found' });
  }
  res.status(200).json({ message: 'Reservation deleted' });
};
