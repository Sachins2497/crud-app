const express = require('express')
const mongoose = require('mongoose')
const Product = require('./models/product.model')
const productRoute = require('./routes/product.route')
const app = express()

app.use(express.json())

app.use('/api/products', productRoute)


app.get('/', (req, res) => {
    res.send("Hello from Node API updated")
})

// app.get('/api/products', async (req, res) => {
//     try {
//         console.log('products')
//         const products = await Product.find({})
//         res.status(200).json(products)
//     } catch (error) {
//         res.status(500).json({message: error.message})
//     }
// })

// app.get('/api/products/:id', async (req, res) => {
//     try {
//         const product = await Product.findById(req.params.id)
//         res.json(product)
//     } catch (error) {
//         res.status(500).json({message: error.message})
//     }
// })

// app.post('/api/products', async (req, res) => {
//     try {
//         // const product = new Product(req.body)
//         // const result = await product.save()
//         // res.status(201).send(result)
//         const product = await Product.create(req.body)
//         res.status(200).json(product)
//     } catch (error) {
//         res.status(500).json({message: error.message})
//     }
// })

//Update a product
// app.put('/api/products/:id', async (req, res) => {
//     try{
//         // const product = await Product.updateOne({_id: new ObjectID(req.params.id)},
//         // {$set:{
//         //     ...req.body
//         // }})
//         const {id} = req.params
//         const product = await Product.findByIdAndUpdate(id, req.body,{new:true})
//         if(!product){
//             return res.status(404).json({message: "Product not found"})
//         }
//         res.status(200).json(product)
//     } catch(error){
//         res.status(500).json({message: error.message})
//     }
// })

// app.delete('/api/products/:id', async (req, res) => {
//     try {
//         const product = await Product.findByIdAndDelete(req.params.id)
//         if(!product){
//             return res.status(404).json({message:"Product not found"})
//         }
//         res.status(200).json(product)
//     } catch (error) {
//         res.status(500).json({message: error.message})
//     }
// })

mongoose.connect("mongodb+srv://ssachinsuresh24:LR1LU6vcpmeQ4n95@backenddb.ucmrlbs.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB")
.then(() => {
    console.log("Connected to databse!")
    app.listen(3000, () => {
        console.log('Server is running on port 3000')
    })
})
.catch(() => {
    console.log("Connection failed!")
})

