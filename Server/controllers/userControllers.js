const userService = require("../service/userService")
const {validationResult} = require("express-validator")
const ApiError = require('../exceptions/api-errors')


class userControllers {
    async registration(req, res, next) {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return next(ApiError.BadRequest('Ошибка валидации', errors.array()));
            }
            const {email, password, role} = req.body;
            const userData = await userService.registration(email, password, role);
            res.cookie('refreshToken', userData.refreshToken, {maxAge: 30 * 24 * 60 * 60 * 10000, httpOnly: true})

            return res.json(userData);
        } catch (e) {
            next(e);

        }
    }

    async login(req, res, next) {
        try {
            const {email, password} = req.body;
            const userData = await userService.login(email, password);
            res.cookie('refreshToken', userData.refreshToken, {maxAge: 30 * 24 * 60 * 60 * 10000, httpOnly: true})

            return res.json(userData);

        } catch (e) {
            next(e);
        }
    }

    async logout(req, res, next) {
        try {
            const {refreshToken} = req.cookies;
            const token = await userService.logout(refreshToken);
            res.clearCookie('refreshToken')
            return res.json(token);


        } catch (e) {
            next(e);
        }
    }

    async activateAcc(req, res, next) {
        try {

        } catch (e) {
            next(e);
        }
    }

    async refresh(req, res, next) {
        try {
            const {refreshToken} = req.cookies;
            const userData = await userService.refresh(refreshToken);
            res.cookie('refreshToken', userData.refreshToken, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true})

            return res.json(userData);

        } catch (e) {
            next(e);
        }
    }

    async dellUsers(req, res, next) {
        try {
            const {id} = req.body;
            const user = await userService.dellUser(id)
            return res.json(user)

        } catch (e) {
            next(e);
        }
    }

    async getUsers(req, res, next) {
        try {
            const users = await userService.getUsers()
            return res.json(users)

        } catch (e) {
            next(e);
        }
    }

    async getUser(req, res, next) {
        try {
            const user = await userService.getUser(req.params.id)
            return res.json(user)

        } catch (e) {
            next(e);
        }
    }


    async editUserProfile(req, res, next) {
        try {
            const {nick, description, picture, id} = req.body
            const user = await userService.editUserProfile(id, picture, description, nick)
            return res.json(user)

        } catch (e) {
            next(e);
        }
    }


}

module.exports = new userControllers();