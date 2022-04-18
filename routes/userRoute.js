

const express = require('express');
const bodyParser = require('body-parser')
const app = express();
var jsonParser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({ extended: false })

const router = express.Router();
const userController = require('../controllers/userController');

//Routes 
router.post('/adduser',urlencodedParser, userController.create);
router.get('/search', userController.find);
router.post('/updateuser', urlencodedParser, userController.update);
router.post('/deleteuser', urlencodedParser,userController.delete);
router.get('/adduserForm', userController.form);

router.get('/', userController.view);





// router.post('/addCommand',urlencodedParser, userController.createCommand);
// router.post('/updateCommand', urlencodedParser,userController.updateCommand);
// router.post('/deletecommand', urlencodedParser,userController.deleteCommand);
// router.get('/', userController.viewCommand);


module.exports = router