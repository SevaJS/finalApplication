const Collection = require("../models/collectionModels.js")
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
            const item = await Collection.findById(id);
            return item
        } catch (e) {


        }
    }


}

module.exports = new CollectionsService();