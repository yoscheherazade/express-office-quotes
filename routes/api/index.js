const express                = require('express');
const router                 = express.Router();
const quoteController      = require('../../controllers/quote');

router.get('/quotes', quoteController.all);
router.get('/quotes/:num', quoteController.byNum);
router.get('/quotes/:id', quoteController.byId);
router.get('/quotes/:character', quoteController.byCharacter);
router.get('/quotes/:character/:num', quoteController.byCharacterAndNum);
router.post('/products', quoteController.create);
router.put('/products/:id', quoteController.update);
router.delete('/products/:id', quoteController.remove);

module.exports = router;