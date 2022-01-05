const jwt = require('jsonwebtoken');
const tokenModel = require('../models/tokenModels')


class tokenService {
    genToken(payload) {
        const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_SECRET_TOKEN, {expiresIn: '30m'})
        const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_SECRET_TOKEN, {expiresIn: '30m'})
        return {
            accessToken,
            refreshToken
        }

    }

    async saveToken(userId, refreshToken) {
        const tokenData = await tokenModel.findOne({user: userId})
        if (tokenData) {
            tokenData.refreshToken = refreshToken;
            return tokenData.save();
        }
        const token = await tokenModel.create({user:userId,refreshToken})
        return token;
    }
    async removeToken(refreshToken){
        const tokenData=await tokenModel.deleteOne({refreshToken});
        return tokenData;
    }
    async findToken(refreshToken){
        const tokenData=await tokenModel.findOne({refreshToken});
        return tokenData;
    }
}

module.exports = new tokenService();