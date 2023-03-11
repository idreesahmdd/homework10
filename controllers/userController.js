const UserService = require("../services/userService");

class UserController {
    static findUser = async (req, res) => {
        try {
            const data = await UserService.findUser();

            res.status(200).json(data.rows);
        } catch (err) {
            res.status(500).json({
                message: "Internal Server Error",
            });
            throw err;
        }
    };

    static findUserById = async (req, res) => {
        try {
            const {id} = req.params;
            const data = await UserService.findUserById(id, res);

            if (data) {
                res.status(200).json(data);
            } else {
                res.status(404).json({
                    message: "User not found",
                });
            }
        } catch (err) {
            res.status(500).json({
                message: "Internal Server Error",
            });
            throw err;
        }
    };

    static createUser = async (req, res) => {
        try {
            const data = await UserService.createUser(req.body, res);

            if (data) {
                res.status(201).json({
                    message: "New User created successfully.",
                });
            } else {
                res.status(400).json({
                    message: "failed create new User",
                });
            }
        } catch (err) {
            res.status(500).json({
                message: "Internal Server Error",
                err,
            });
            throw err;
        }
    };

    static updateUser = async (req, res) => {
        try {
            const {id} = req.params;

            const data = await UserService.updateUser(req.body, id, res);

            if (data) {
                res.status(200).json({
                    message: "Updated user successfully",
                });
            } else {
                res.status(400).json({
                    message: "Updated user failed",
                });
            }
        } catch (err) {
            res.status(500).json({
                message: "Internal Server Error",
            });
            throw err;
        }
    };

    static deleteUser = async (req, res) => {
        try {
            const {id} = req.params;

            const data = await UserService.deleteUser(id);

            if (data) {
                res.status(200).json({
                    message: "Deleted User successfully",
                });
            } else {
                res.status(404).json({
                    message: "User not found",
                });
            }
        } catch (err) {
            res.status(500).json({
                message: "Internal Server Error",
            });
            throw err;
        }
    };
}

module.exports = UserController;
