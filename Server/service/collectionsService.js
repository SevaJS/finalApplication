const Collection = require("../models/collectionModels.js")
const collectionItem = require("../models/collectionItemModels")
const collectionDto = require("../dtos/collectionsDto")


class CollectionsService {


    async createColl({title, theme, author, description, img}) {
        try {
            const col = await Collection.create({title, theme, author, description, img})
            const collDto = new collectionDto(col);
            return collDto
        } catch (e) {
            console.log(e)

        }
    }

    async dellColl(id) {
        try {
            console.log(id)
            const coll = Collection.findByIdAndDelete(id);

            return coll;

        } catch (e) {

        }
    }

    async getAllColl() {
        try {
            const coll = await Collection.find();
            return coll

        } catch (e) {

        }
    }

    async getOneColl(id) {
        try {
            debugger
            const item = await Collection.findById(id);
            console.log(item)
            return item
        } catch (e) {


        }
    }

    async editCollDependence(id, data) {
        try {
            const coll = await Collection.findByIdAndUpdate(id, {$push: {items: data}})
            console.log(coll)
            return coll;

        } catch (e) {

        }
    }

    async getUsersColls(id) {
        try {
            console.log(id)
            const coll = await Collection.find({author: id})
            return coll;

        } catch (e) {

        }
    }


}

module.exports = new CollectionsService();