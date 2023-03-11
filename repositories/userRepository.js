const UserModel = require("../models/userModel");

class UserRepository {
    static findUser = async () => {
        try {
            return await UserModel.allUser();
        } catch (err) {
            throw err;
        }
    };

    static findUserById = async (id) => {
        try {
            return await UserModel.userById(id);
        } catch (err) {
            throw err;
        }
    };

    static createUser = async (params) => {
        try {
            return await UserModel.createUser(params);
        } catch (err) {
            throw err;
        }
    };

    static updateUser = async (params, id) => {
        try {
            return await UserModel.updateUser(params, id);
        } catch (err) {
            throw err;
        }
    };

    static deleteUser = async (id) => {
        try {
            return await UserModel.deleteUser(id);
        } catch (err) {
            throw err;
        }
    };
}

module.exports = UserRepository;
