const Collection = require("../models/collectionModels.js")
const collectionDto = require("../dtos/collectionsDto")


class CollectionsService {


    async createColl({title, theme, author, description, picture, authorName}) {
        try {
            const col = await Collection.create({title, theme, author, description, picture, authorName})
            const collDto = new collectionDto(col);
        } catch (e) {
            console.log(e)

        }
    }

    async dellColl(id) {
        try {
            const coll = Collection.findByIdAndDelete(id);
            return coll;

        } catch (e) {
            console.log(e)
        }
    }

    async getAllColl(selectedType) {
        try {
            let coll;
            if (selectedType === 'All' || !selectedType) {
                coll = await Collection.find();
            } else if (selectedType) {
                coll = await Collection.find({theme: selectedType});
            }
            return coll

        } catch (e) {
            console.log(e)
        }
    }

    async getOneColl(id) {
        try {
            const item = await Collection.findById(id);
            return item
        } catch (e) {

            console.log(e)
        }
    }

    async editCollDependence(id, data) {
        try {
            const coll = await Collection.findByIdAndUpdate(id, {$push: {items: data}})
            return coll;

        } catch (e) {
            console.log(e)
        }
    }

    async getUsersColls(id) {
        try {
            return await Collection.find({author: id});

        } catch (e) {
            console.log(e)
        }
    }

    async dellDeps(itemId, authorID) {
        try {
            const res = await Collection.findOneAndUpdate({_id: authorID}, {$pull: {items: itemId}})

        } catch (e) {
            console.log(e)
        }
    }


}

module.exports = new CollectionsService();