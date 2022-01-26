const collectionItemDto = require("../dtos/collectionsDto")
const collectionItem = require('../models/collectionItemModels')

class CollectionsItemService {


    async createCollItem({author, title, description, img, motherCollId}) {
        try {
            const col = await collectionItem.create({author, title, description, img, motherCollId})
            const collDto = new collectionItemDto(col);
            return collDto
        } catch (e) {
            console.log(e)

        }
    }

    async dellCollItem(id) {
        try {
            const coll = collectionItem.findByIdAndDelete(id);
            return coll;

        } catch (e) {
            console.log(e)
        }
    }

    async getAllCollItem() {
        try {
            const coll = await collectionItem.find()
            console.log(coll)
            return coll

        } catch (e) {
            console.log(e)

        }
    }

    async getOneCollItem(id) {
        try {
            console.log(id)

            const item = await collectionItem.findById(id);
            return item
        } catch (e) {

            console.log(e)
        }
    }

    async getAllUserCollItem(id) {
        try {

            const item = await collectionItem.findById(id);
            return item
        } catch (e) {

            console.log(e)
        }
    }

    async dellCollDeps(id) {
        try {
            const coll = collectionItem.deleteMany({motherCollId: id});
            return coll;

        } catch (e) {
            console.log(e)
        }
    }


}

module.exports = new CollectionsItemService();