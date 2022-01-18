const collectionService = require("../service/collectionsService")


class collectionControllers {


    async createColl(req, res, next) {
        try {

            const {title, theme, author, description} = req.body
            const collData = await collectionService.createColl(title, theme, author, description);
            return res.json(collData);


        } catch (e) {
            next(e);
        }
    }

    async dellColl(req, res, next) {
        try {

            const coll = await collectionService.dellColl(req.params.id)
            return res.json(coll);


        } catch (e) {
            next(e);

        }
    }

    async editColl(req, res, next) {
        try {

        } catch (e) {
            next(e);

        }
    }

    async getAllColl(req, res, next) {
        try {

            const coll = await collectionService.getAllColl()
            return res.json(coll)

        } catch (e) {
            next(e);

        }
    }

    async getOneColl(req, res, next) {debugger
        try {
            const coll = await collectionService.getOneColl(req.params.id)
            console.log(coll)
            return res.json(coll);

        } catch (e) {
            next(e);

        }
    }


}

module.exports = new collectionControllers();