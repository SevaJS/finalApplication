const typeModel = require("../models/typeModels")


class typeService {


    async getTypes() {
        try {
            const types = await typeModel.find();
            return types
        } catch (e) {


        }
    }

    async createType(type) {
        try {
            const types = await typeModel.create({type: type});
            return types
        } catch (e) {
            console.log(e)


        }
    }


}

module.exports = new typeService();