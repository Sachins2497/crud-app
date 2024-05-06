const Product = require('../models/product.model')

const getProducts = async (req, res) => {
    try {
        console.log('products')
        const products = await Product.find({})
        res.status(200).json(products)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

const getProduct = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id)
        res.json(product)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

const postProduct = async (req, res) => {
    try {
        // const product = new Product(req.body)
        // const result = await product.save()
        // res.status(201).send(result)
        const product = await Product.create(req.body)
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

const updateProduct = async (req, res) => {
    try{
        // const product = await Product.updateOne({_id: new ObjectID(req.params.id)},
        // {$set:{
        //     ...req.body
        // }})
        const {id} = req.params
        const product = await Product.findByIdAndUpdate(id, req.body,{new:true})
        if(!product){
            return res.status(404).json({message: "Product not found"})
        }
        res.status(200).json(product)
    } catch(error){
        res.status(500).json({message: error.message})
    }
}

const deleteProduct = async (req, res) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id)
        if(!product){
            return res.status(404).json({message:"Product not found"})
        }
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

module.exports = {
    getProducts,
    getProduct,
    postProduct,
    updateProduct,
    deleteProduct
}