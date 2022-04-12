

const express = require('express');
const bodyParser = require('body-parser')
const app = express();
var jsonParser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({ extended: false })

const router = express.Router();
const userController = require('../controllers/userController');

//Routes 
router.post('/adduser',urlencodedParser, userController.create);
// router.get('/users', userController.getUsers);
router.get('/search', userController.find);
router.put('/updateuser/:id', userController.update);
router.delete('/deleteuser/:id', urlencodedParser,userController.delete);
// router.get('/', userController.view);
router.get('/adduserForm', userController.form);

router.get('/', userController.view);

module.exports = router