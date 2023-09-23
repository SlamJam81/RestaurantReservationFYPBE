const express = require('express');
const guestController = require('../controllers/guestController');

const router = express.Router();

router.get('/', guestController.getAllGuests);
router.post('/', guestController.createGuest);
router.get('/:id', guestController.getGuestById);
router.put('/:id', guestController.updateGuest);
router.delete('/:id', guestController.deleteGuest);

module.exports = router;
