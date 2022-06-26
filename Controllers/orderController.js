const Order = require("../models/Order");

const orderController = {};

orderController.getAll = async (req,res) =>{
    try{
        const orders = await Order.find();
        
        return res.status(200).json(
            {
                success: true,
                message: 'Get all films retrieved succcesfully',
                data: orders
            }
        );
    }catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Error retrieving orders',
            error: error.message
        })
    }
}

module.exports = orderController;