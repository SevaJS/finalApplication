const collectionService = require("../service/collectionsService")
const CollectionsItemService = require("../service/collectionsItemService")


class collectionControllers {


    async createColl(req, res, next) {
        try {
            console.log(req)

            const {title, theme, author, description} = req.body
            const img = req.file.path

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
            const dellDeps = await CollectionsItemService.dellCollDeps(id)
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

        try {
            const coll = await collectionService.getUsersColls(req.params.id)
            console.log(coll)
            return res.json(coll)

        } catch (e) {
            next(e);

        }
    }

    async uploadImg(req, res, next) {

        try {
            console.log(req)
            if (req.file) {
                const img = await collectionService.uploadImg(req.file.path)
            }

        } catch (e) {
            next(e);

        }
    }


}

module.exports = new collectionControllers();