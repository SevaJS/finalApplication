const collectionItemDto = require("../dtos/collectionsDto")
const collectionItem = require('../models/collectionItemModels')

class CollectionsItemService {


    async createCollItem({title, description, img}) {
        try {
            const col = await collectionItem.create({title, description, img})
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


}

module.exports = new CollectionsItemService();