const express = require('express');
const app = express();
const router = express.Router();
const { greet, valid,studValid } = require('../middlewares/validate');
const studController = require('../controllers/studentControllers');

router.get('/', studValid, studController.Home);
router.get('/db', studValid, studController.db);


module.exports = router;
