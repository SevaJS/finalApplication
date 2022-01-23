const typeService = require("../service/typeService");


class typeControllers {


    async getTypes(req, res, next) {
        debugger
        try {
            const types = await typeService.getTypes()
            return res.json(types);

        } catch (e) {
            next(e);

        }
    }

    async createType(req, res, next) {
        debugger
        try {
            const {type} = req.body;
            const types = await typeService.createType(type)
            return res.json(types);

        } catch (e) {
            next(e);

        }
    }

}

module.exports = new typeControllers();