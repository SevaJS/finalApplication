const CollectionsItemService = require("../service/collectionsItemService")
const CollectionsService = require("../service/collectionsService")


class collectionItemControllers {


    async createCollItem(req, res, next) {
        try {

            const {title, description, img, id, author,motherCollId} = req.body
            const collData = await CollectionsItemService.createCollItem({author, title, description, img,motherCollId});
            const editCollDep = await CollectionsService.editCollDependence(id, collData)
            return res.json(collData);


        } catch (e) {
            next(e);
        }
    }

    async dellCollItem(req, res, next) {
        try {
            const {id} = req.body;
            const coll = await CollectionsItemService.dellCollItem(id)
            return res.json(coll);


        } catch (e) {
            next(e);

        }
    }

    async editCollItem(req, res, next) {
        try {

        } catch (e) {
            next(e);

        }
    }

    async getAllCollItem(req, res, next) {
        try {
            const coll = await CollectionsItemService.getAllCollItem()
            return res.json(coll)

        } catch (e) {
            next(e);

        }
    }

    async getOneCollItem(req, res, next) {
        debugger
        try {
            const coll = await CollectionsItemService.getOneCollItem(req.params.id)
            return res.json(coll);

        } catch (e) {
            next(e);

        }
    }

    async getAllUserCollItem(req, res, next) {
        try {
            const coll = await CollectionsItemService.getAllUserCollItem()
            return res.json(coll)

        } catch (e) {
            next(e);

        }
    }


}

module.exports = new collectionItemControllers();