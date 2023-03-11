const UserRepository = require("../repositories/userRepository");

class UserService {
    static findUser = async () => {
        try {
            return await UserRepository.findUser();
        } catch (err) {
            throw err;
        }
    };

    static findUserById = async (id) => {
        try {
            return await UserRepository.findUserById(id);
        } catch (err) {
            throw err;
        }
    };

    static createUser = async (params) => {
        try {
            return await UserRepository.createUser(params);
        } catch (err) {
            throw err;
        }
    };

    static updateUser = async (params, id) => {
        try {
            return await UserRepository.updateUser(params, id);
        } catch (err) {
            throw err;
        }
    };

    static deleteUser = async (id) => {
        try {
            return await UserRepository.deleteUser(id);
        } catch (err) {
            throw err;
        }
    };
}

module.exports = UserService;
