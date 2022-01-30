const collectionService = require("../service/collectionsService")
const CollectionsItemService = require("../service/collectionsItemService")


class collectionControllers {


    async createColl(req, res, next) {
        try {
            const {title, theme, author, description, picture, authorName} = req.body
            const collData = await collectionService.createColl({
                title,
                theme,
                author,
                description,
                picture,
                authorName
            });
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
            const coll = await collectionService.editCollDependence(id)
            return res.json(coll);

        } catch (e) {
            next(e);

        }
    }

    async getAllColl(req, res, next) {
        try {
            const selectedType = req.query.type;
            const coll = await collectionService.getAllColl(selectedType)
            return res.json(coll)

        } catch (e) {
            next(e);

        }
    }

    async getOneColl(req, res, next) {
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
            return res.json(coll)
        } catch (e) {
            next(e);

        }
    }

    async dellCollDeps(id, authorID) {
        try {
            const edit = await collectionService.dellDeps(id, authorID)

        } catch (e) {

        }
    }


}

module.exports = new collectionControllers();