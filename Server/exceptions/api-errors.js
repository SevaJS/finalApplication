module.exports = class ApiError extends Error {

    status;
    errors;


    constructor(status, message, errors = []) {
        super(message);
        this.status = status;
        this.errors = errors;


    }


    static UnathorizedError() {
        return new ApiError(401, "Пользователь не автаризован!")

    }
    static UnathorizedErrorr() {
        return new ApiError(401, "Пользователь нyе автаризован!")

    }
    static UnathorizedErrorrr() {
        return new ApiError(401, "Пользователь нyeе автаризован!")

    }
    static noAccess(data) {
        return new ApiError(403, data.value())

    }

    static BadRequest(message, errors = []) {
        return new ApiError(400, message, errors)
    }
}