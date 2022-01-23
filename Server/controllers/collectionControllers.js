const collectionService = require("../service/collectionsService")
const uuid = require('uuid');
const path = require("path")
let fs = require('fs');

class collectionControllers {


    async createColl(req, res, next) {
        try {

            const {title, theme, author, description, img} = req.body
            console.log(req.body)
            console.log(req.file)
            const collData = await collectionService.createColl({title, theme, author, description, img});
            return res.json(collData);


        } catch (e) {
            next(e);
        }
    }

    async dellColl(req, res, next) {
        try {
            const {id} = req.body;
            console.log(id)
            const coll = await collectionService.dellColl(id)
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

    async getOneColl(req, res, next) {
        debugger
        try {
            const coll = await collectionService.getOneColl(req.params.id)
            return res.json(coll);

        } catch (e) {
            next(e);

        }
    }


}

module.exports = new collectionControllers();