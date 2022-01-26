const collectionService = require("../service/collectionsService")

class collectionControllers {


    async createColl(req, res, next) {
        try {

            const {title, theme, author, description, img} = req.body
            const collData = await collectionService.createColl({title, theme, author, description, img});
            return res.json(collData);


        } catch (e) {
            next(e);
        }
    }

    async dellColl(req, res, next) {
        try {
            const {id} = req.body;
            const coll = await collectionService.dellColl(id)
            return res.json(coll);


        } catch (e) {
            next(e);

        }
    }

    async editCollDependence(req, res, next) {
        try {
            const {id} = req.body;
            console.log(id)
            const coll = await collectionService.editCollDependence(id)
            return res.json(coll);

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

    async getOneColl(req, res, next) {
        debugger
        try {
            const coll = await collectionService.getOneColl(req.params.id)
            return res.json(coll);

        } catch (e) {
            next(e);

        }
    }
    async getUsersColls(req, res, next) {
        debugger
        try {
            const {id} = req.body;
            console.log(id)
            const coll = await collectionService.getUsersColls(id)
            console.log(coll)
            return res.json(coll);

        } catch (e) {
            next(e);

        }
    }


}

module.exports = new collectionControllers();