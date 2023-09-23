const express = require('express');
const tableController = require('../controllers/tableController');

const router = express.Router();

router.get('/', tableController.getAllTables);
router.post('/', tableController.createTable);
router.get('/:id', tableController.getTableById);
router.put('/:id', tableController.updateTable);
router.delete('/:id', tableController.deleteTable);

module.exports = router;
