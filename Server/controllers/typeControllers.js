const typeService = require("../service/typeService");


class typeControllers {


    async getTypes(req, res, next) {
        debugger
        try {
            const types = await typeService.getTypes()
            console.log(types)
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
            console.log(types)
            return res.json(types);

        } catch (e) {
            next(e);

        }
    }

}

module.exports = new typeControllers();