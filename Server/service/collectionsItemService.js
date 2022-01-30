const collectionItemDto = require("../dtos/collectionsDto")
const collectionItem = require('../models/collectionItemModels')

class CollectionsItemService {


    async createCollItem({author, title, description, picture, motherCollId}) {
        try {
            const col = await collectionItem.create({author, title, description, picture, motherCollId})
            return new collectionItemDto(col)
        } catch (e) {
            console.log(e)

        }
    }

    async dellCollItem(id) {
        try {
            return collectionItem.findByIdAndDelete(id);

        } catch (e) {
            console.log(e)
        }
    }

    async getAllCollItem() {
        try {
            return await collectionItem.find()

        } catch (e) {
            console.log(e)

        }
    }

    async getOneCollItem(id) {
        try {
            return await collectionItem.findById(id)
        } catch (e) {

            console.log(e)
        }
    }

    async getAllUserCollItem(id) {
        try {
            return await collectionItem.findById(id)
        } catch (e) {

            console.log(e)
        }
    }

    async dellCollDeps(id) {
        try {
            return collectionItem.deleteMany({motherCollId: id});

        } catch (e) {
            console.log(e)
        }
    }

    async getUsersItems(id) {
        try {
            return await collectionItem.find({author: id});

        } catch (e) {

        }
    }

    async getItemsOfColl(id) {
        try {
            return await collectionItem.find({motherCollId: id})
        } catch (e) {

        }
    }

    async addComm(id, comment, author) {
        try {
            const res = await collectionItem.findByIdAndUpdate(id, {
                $push: {
                    comments: {
                        ovner: author,
                        comment: comment
                    }
                }
            });
            return res
        } catch (e) {

        }
    }


}

module.exports = new CollectionsItemService();