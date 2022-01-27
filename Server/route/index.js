const Router = require("express").Router;
const userController = require("../controllers/userControllers")
const collectionControllers = require("../controllers/collectionControllers")
const router = new Router();
const {body} = require('express-validator')
const authMiddle = require("../middlewares/auth-middle")
const checkRoleMiddle = require("../middlewares/checkRole-middle")
const typeControllers = require("../controllers/typeControllers")
const collectionItemControllers = require("../controllers/collectionItemControllers")

router.post('/registration',
    body('email').isEmail(),
    body('password').isLength({max: 32, min: 2}),
    userController.registration);
router.post('/login', userController.login);
router.post('/logout', userController.logout);
router.get('/refresh', userController.refresh);
router.post('/upload',)
router.get('/users/:id', userController.getUser);
router.get('/activate/:link', userController.activateAcc);
router.get('/users', checkRoleMiddle("ADMIN"), userController.getUsers);
router.post('/users/del', checkRoleMiddle("ADMIN"), userController.dellUsers);
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
router.post('/types', checkRoleMiddle("ADMIN"), typeControllers.createType)
router.get('/types', typeControllers.getTypes)
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
router.get('/collections', collectionControllers.getAllColl)
router.get('/usersCollections/:id', collectionControllers.getUsersColls)
router.put('/collections', collectionControllers.editCollDependence)
router.get('/collections/:id', collectionControllers.getOneColl)
router.post('/collections', checkRoleMiddle(), collectionControllers.createColl)
router.post('/collections/del', checkRoleMiddle(), collectionControllers.dellColl)
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
router.put('/collections/:id/:id', collectionItemControllers.editCollItem)
router.get('/collectionItem/:id', collectionItemControllers.getOneCollItem)
router.get('/collectionItems', collectionItemControllers.getAllCollItem)
router.post('/collections/:id/', checkRoleMiddle(), collectionItemControllers.createCollItem)
router.post('/collections/:id/del', checkRoleMiddle(), collectionItemControllers.dellCollItem)


module.exports = router;




