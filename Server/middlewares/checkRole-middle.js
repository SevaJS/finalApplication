const ApiError = require("../exceptions/api-errors")
const tokenServes = require("../service/tokenService")
const userServes = require("../service/userService")
const jwt = require("jsonwebtoken");

module.exports = function () {
    return function (req, res, next) {
        try {
            const authHeader = req.headers.authorization;
            if (!authHeader) {
                return next(ApiError.UnathorizedError())
            }
            const accessToken = authHeader.split(' ')[1];
            if (!accessToken) {
                return next(ApiError.UnathorizedErrorr())
            }
            const userData = tokenServes.findToken(accessToken);
            if (!userData) {
                return next(ApiError.UnathorizedErrorrr())
            }
            const decoded = jwt.verify(accessToken, process.env.JWT_ACCESS_SECRET_TOKEN)
            console.log(decoded.role)

            if (decoded.role !== "ADMIN" & decoded.role !== "USER") {
                return next(ApiError.noAccess(userData))
            }
            req.user = userData;
            next();


        } catch (e) {
            return next(ApiError.UnathorizedError())

        }


    }
}