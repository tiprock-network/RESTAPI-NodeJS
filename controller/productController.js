const Product=require('../model/productModel')
const {getPostData}=require('../utils')
async function getProducts(req,res){
    try{
        const products=await Product.findAll()
        res.writeHead(200,{'Content-Type':'application/json'})
        res.end(JSON.stringify(products))
    }catch(error){
        console.log(error)
    }
}

async function getProduct(req,res,id){
    try{
        const product=await Product.findById(id)
        if(!product){
            res.writeHead(404,{
                'Content-Type':'application/json'
            })
            res.end(JSON.stringify({message:'Product Not Found'}))
        }else{
            res.writeHead(200,{
                'Content-Type':'application/json'
            })
            res.end(JSON.stringify(product))
        }
    }catch(error){
        console.log(error)
    }
}

async function createProduct(req,res){
    try{
        const body=await getPostData(req)
        const {name,desc,price}=JSON.parse(body)
        const product={
            name,
            desc,
            price 
           }
           const newProduct= await Product.create(product)
           res.writeHead(201,{'Content-Type':'application/json'})
           return res.end(JSON.stringify(newProduct))
    }catch(error){
        console.log(error)
    }
}

async function updateProduct(req,res,id){
    try{
        const product=await Product.findById(id)
        if(!product){
            res.writeHead(404,{'Content-Type':'application/json'})
            res.end(JSON.stringify({message:'Product Not Available'}))
        }else{
            const body=await getPostData(req)
            const {name,desc,price}=JSON.parse(body)
            const productData={
                name:name||product.name,
                desc:desc||product.desc,
                price:price||product.price
            }

            const updProduct=await Product.update(id,productData)
            res.writeHead(200,{'Content-Type':'application/json'})
            return res.end(JSON.stringify(updProduct))
        }
       
    }catch(error){
          console.log(error)
    }
}

async function deleteProduct(req,res,id){
    try{
        const product=await Product.findById(id)
        if(!product){
            res.writeHead(404,{'Content-Type':'application/json'})
            res.end(JSON.stringify({message:'Product Not Available'}))
        }else{
            await Product.remove(id)
            res.writeHead(200,{'Content-Type':'application/json'})
            res.end(JSON.stringify({message:`Product ${id} removed`}))
        }

    }catch(error){
        console.log(error)
    }
}
module.exports={getProducts, getProduct, createProduct, updateProduct, deleteProduct}