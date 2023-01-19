const connectDB = require("./config/db")
//const  cors = require("@fastify/cors")

const fastify=require("fastify")({
    logger:true
})
// fastify.register(cors, { 
    
//   })

  connectDB()

fastify.get("/home",(req,res,next)=>{
    res.send("Welcome to Neokred")
   


})

const userSchema=require("./config/Schema/userSchema")


fastify.post("/products",async(req,res)=>{

    console.log(req,"resss")
    const{userName,userEmail}=req.body
    try{
        const data= await userSchema.create({userName,userEmail})

        console.log(data)
        if(data){
            res.code(200).send({message:"User added successfully",statusCode:200})

        }
        else{
            res.code(500).send({message:"Something went wrong",statusCode:500})
            
        }
    }catch(err){
        res.code(500).send({message:"Something went wrong",statusCode:500})
            
        console.log(err)
    }
    
})


fastify.get("/products",async(req,res)=>{
    
try{
    const data=await userSchema.find()
    if(data){
        res.code(200).send({message:"successfully",statusCode:200,data})
    }
    else{
        res.code(500).send({message:"failed",statusCode:500})
    }
    }catch(err){
    res.code(500).send({message:"failed",statusCode:500})
    }
})


// const obj={
//     data:function(){

//     }
// }





fastify.listen(5000,()=>{
    console.log("success")
})