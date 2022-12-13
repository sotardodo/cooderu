const fs = require('fs')
const db = require("../config/db");
const { Product } = require('../models')

const createProduct = async (req, res) => {
    const body = req.body;

    Product.create({
        Productname: body.Productname,
        price: body.price,
        quantity: body.quantity

    })
        .then(Product => {
            res.status(200).json({
                message: "Product created",
                data: Product
            });
        }).catch(e => {
            res.status(500).json({
                message: "Internal Server Error",
            });
        })
};

const getAllProduct = async (req, res) => {

    Product.findAll({})
        .then(Products => {
            res.status(200).json({
                message: "Product created",
                data: Products,
            });
        }).catch(e => {
            res.status(500).json({
                message: "Internal Server Error",
            });
        })
};

const updateProduct = async (req, res) => {
    const body = req.body
    const id = req.params.id

    console.log(body)
    console.log(id)

    Product.update({
        Productname: body.Productname,
        quantity: body.quantity,
        price: body.price
    }, {
        where : {
            id : id
        }
    })
        .then(() => {
            res.status(200).json({
                message: "Data Updated",
            });
        }).catch(e => {
            res.status(500).json({
                message: "Internal Server Error",
            });
        })
};

const deleteProduct = async (req, res) => {
    const id = req.params.id

    Product.destroy({
        where : {
            id : id
        }
    })
        .then(() => {
            res.status(200).json({
                message: "Data Deleted",
            });
        }).catch(e => {
            res.status(500).json({
                message: "Internal Server Error",
            });
        })
};


module.exports = {
    createProduct,
    getAllProduct,
    updateProduct,
    deleteProduct
}