const Router = require("express").Router;
const userController = require("../controllers/userControllers")
const collectionControllers = require("../controllers/collectionControllers")
const router = new Router();
const {body} = require('express-validator')
const authMiddle = require("../middlewares/auth-middle")
const checkRoleMiddle = require("../middlewares/checkRole-middle")

router.post('/registration',
    body('email').isEmail(),
    body('password').isLength({max: 32, min: 2}),
    userController.registration);
router.post('/login', userController.login);
router.post('/logout', userController.logout);
router.get('/refresh', userController.refresh);
router.get('/activate/:link', userController.activateAcc);
router.get('/users', checkRoleMiddle("ADMIN"), userController.getUsers);
router.post('/collections', checkRoleMiddle("ADMIN"), collectionControllers.createColl)
router.get('/collections', collectionControllers.getAllColl)
router.get('/collections/:id', collectionControllers.getOneColl)
router.put('/collections/:id', collectionControllers.editColl)
router.delete('/collections/:id', collectionControllers.dellColl)


module.exports = router;




