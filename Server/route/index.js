const Router = require("express").Router;
const userController = require("../controllers/userControllers")
const router = new Router();
const {body} = require('express-validator')
const authMiddle=require("../middlewares/auth-middle")

router.post('/registration',
    body('email').isEmail(),
    body('password').isLength({max: 32, min: 2}),
    userController.registration
)
;
router.post('/login', userController.login);
router.post('/logout', userController.logout);
router.get('/refresh', userController.refresh);
router.get('/activate/:link', userController.activateAcc);
router.get('/users', authMiddle, userController.getUsers);

module.exports = router;




