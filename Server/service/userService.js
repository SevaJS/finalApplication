const userModel = require('../models/userModels')
const bcrypt = require("bcrypt")
const uuid = require("uuid")
const tokenService = require("../service/tokenService")
const UserDto = require("../dtos/usersDto")
const ApiError = require("../exceptions/api-errors")


class userService {
    async registration(email, password, role) {
        const uniqUser = await userModel.findOne({email})
        if (uniqUser) {
            throw ApiError.BadRequest(`Пользовательс имейлом ${email}, уже существует!`)
        }
        const hashPass = await bcrypt.hash(password, 3)
        const user = await userModel.create({email, password: hashPass, role})
        const userDto = new UserDto(user);//email,id,isActivated
        const tokens = tokenService.genToken({...userDto});
        await tokenService.saveToken(userDto.id, tokens.refreshToken);

        return {
            ...tokens, user: userDto
        }


    }

    async login(email, password) {
        const user = await userModel.findOne({email});
        if (!user) {
            throw  ApiError.BadRequest("User not found!")
        }
        const isPassEquals = await bcrypt.compare(password, user.password);
        if (!isPassEquals) {
            throw ApiError.BadRequest("Неверный пароль!");
        }
        const userDto = new UserDto(user);
        const tokens = tokenService.genToken({...userDto});
        await tokenService.saveToken(userDto.id, tokens.refreshToken);

        return {
            ...tokens, user: userDto
        }

    }

    async logout(refreshToken) {
        const token = await tokenService.removeToken(refreshToken);
        return token;


    }

    async refresh(refreshToken) {
        debugger
        if (!refreshToken) {
            throw ApiError.UnathorizedError()
        }
        const userData = tokenService.validateRefreshToken(refreshToken);
        const tokenFromDb = tokenService.findToken(refreshToken);
        if (!tokenFromDb || !userData) {
            throw ApiError.UnathorizedError()
        }
        const user = await userModel.findById(userData.id)
        const userDto = new UserDto(user);
        const tokens = tokenService.genToken({...userDto});
        await tokenService.saveToken(userDto.id, tokens.refreshToken);

        return {
            ...tokens, user: userDto
        }


    }

    async dellUser(id) {
        try {
            const user = userModel.findByIdAndDelete(id);
            return user;

        } catch (e) {

        }
    }

    async getUsers() {
        const users = await userModel.find();
        return users
    }

    async getUser(id) {
        const user = await userModel.findById(id);
        return user
    }

    async editUserProfile(id, picture, description, nick) {
        const uniqUser = await userModel.findOne({nick})
        if (!uniqUser) {
            throw ApiError.BadRequest(`Пользовательс с ником ${nick}, уже существует!`)
        }
        if (picture) {

        }
        const user = await userModel.findByIdAndUpdate(id, {
            avatar: picture ? picture : '',
            description: description,
            nickName: nick
        });
        return user
    }
}

module.exports = new userService();