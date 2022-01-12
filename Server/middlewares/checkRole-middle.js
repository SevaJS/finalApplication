const ApiError = require("../exceptions/api-errors")
const tokenServes = require("../service/tokenService")
const userServes = require("../service/userService")
const jwt = require("jsonwebtoken");

module.exports = function (role) {
    return function (req, res, next) {
        try {
            const authHeader = req.headers.authorization;
            if (!authHeader) {
                return next(ApiError.UnathorizedError())
            }
            const accessToken = authHeader.split(' ')[1];
            if (!accessToken) {
                return next(ApiError.UnathorizedError())
            }
            const userData = tokenServes.findToken(accessToken);
            if (!userData) {
                return next(ApiError.UnathorizedError())
            }
            const decoded = jwt.verify(accessToken, process.env.JWT_ACCESS_SECRET_TOKEN)

            if (decoded.role !== role) {
                return next(ApiError.noAccess(userData))
            }
            req.user = userData;
            next();


        } catch (e) {
            return next(ApiError.UnathorizedError())

        }


    }
}