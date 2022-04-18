
const express = require('express');
const bodyParser = require('body-parser')
const app = express();
var jsonParser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({ extended: false })

const router = express.Router();
const commandClientController = require('../controllers/commandClientController');


router.get('/', commandClientController.viewCommandClient);
router.post('/findCommand', urlencodedParser,commandClientController.findCommand);



module.exports = router