const User = require("../models/User");

const userController = {};

userController.getAll = async (req, res) => {
    try {
        const users = await User.find();

        return res.status(200).json(
            {
                success: true,
                message: 'Get all users retrieved succsessfully',
                data: users
            }
        );
    } catch (error) {
        return res.status(500).json(
            {
                success: false,
                message: 'Error retrieving users',
                error: error.message
            }
        )
    }
};