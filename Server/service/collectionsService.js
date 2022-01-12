const Collection = require("../models/collectionModels.js")

const collectionDto = require("../dtos/collectionsDto")
const ApiError = require("../exceptions/api-errors")


class CollectionsService {


    async createColl(title, theme, author, description) {


        const col = await Collection.create({title, theme, author, description})
        const collDto = new collectionDto(col);
        return (
            collDto
        )

    }

    async dellColl(id) {
        try {
            const coll=Collection.findByIdAndDelete(id);
            return coll;

        }catch (e) {

        }
    }

    async getAllColl() {
        try {
            const coll = await Collection.find();
            return coll

        } catch (e) {

        }
    }

    async getOneColl() {
        try {

        } catch (e) {

        }
    }


}

module.exports = new CollectionsService();