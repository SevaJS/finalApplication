const CollectionsItemService = require("../service/collectionsItemService")
const CollectionsService = require("../service/collectionsService")
const collectionController = require("../controllers/collectionControllers")


class collectionItemControllers {


    async createCollItem(req, res, next) {
        try {

            const {title, description, picture, id, author, motherCollId} = req.body
            const collData = await CollectionsItemService.createCollItem({
                author,
                title,
                description,
                picture,
                motherCollId
            });
            const editCollDep = await CollectionsService.editCollDependence(id, collData)
            return res.json(collData);


        } catch (e) {
            next(e);
        }
    }

    async dellCollItem(req, res, next) {
        try {
            const {id, authorID} = req.body;
            const coll = await CollectionsItemService.dellCollItem(id)
            const delDeps = await collectionController.dellCollDeps(id, authorID)
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

    async getUsersItems(req, res, next) {
        try {
            const coll = await CollectionsItemService.getUsersItems(req.params.id)
            return res.json(coll)

        } catch (e) {
            next(e);

        }
    }

    async getItemsOfColl(req, res, next) {
        try {
            const coll = await CollectionsItemService.getItemsOfColl(req.params.id)
            return res.json(coll)

        } catch (e) {
            next(e);

        }
    }

    async addComm(req, res, next) {
        try {
            const {id, comment, author} = req.body
            const coll = await CollectionsItemService.addComm(id, comment, author)
            return res.json(coll)

        } catch (e) {
            next(e);

        }
    }



}

module.exports = new collectionItemControllers();