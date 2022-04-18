
const express = require('express');
const bodyParser = require('body-parser')
const app = express();
var jsonParser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({ extended: false })

const router = express.Router();
const commandController = require('../controllers/commandController');

//Routes 
// router.post('/addCommand',urlencodedParser, userController.createCommand);
// router.get('/search', userController.find);
// router.post('/updateuser', urlencodedParser, userController.update);
// router.post('/deleteuser', urlencodedParser,userController.delete);
// router.get('/adduserForm', userController.form);
// router.get('/', commandController.viewCommand);
// router.get('/test', commandController.findCommand);


router.post('/addCommand',urlencodedParser, commandController.createCommand);
router.post('/updateCommand', urlencodedParser,commandController.updateCommand);
router.post('/deletecommand', urlencodedParser,commandController.deleteCommand);
router.get('/', commandController.viewCommand);











module.exports = router