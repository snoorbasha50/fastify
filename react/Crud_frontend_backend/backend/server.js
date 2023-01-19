const connectDB=require('./config/db')


const fastify=require("fastify")({
    logger:true
})

connectDB()
const cors=require("@fastify/cors")
fastify.register(cors,{})



const userDetails=require("./Schema/userSchema")


fastify.get("/",(req,res)=>{
    res.send("Welcome")


})


fastify.post("/register",async(req,res)=>{

    console.log(req.body,"resssss")

    const{userFirst,userLast,userEmail,userPhone}=req.body
    try{
        const data=await userDetails.create({userFirst,userLast,userEmail,userPhone})
        console.log(data , "data")
        if(data){
            res.code(200).send({message:"succesfully added",statusCode:200})
        }
        else{
            res.code(500).send({message:"Not Successful",statusCode:500})
        }
    }catch(err){
        console.log(err,"---")
        res.code(500).send({message:"Not successful",statusCode:500})
    }



})


fastify.listen(5000,()=>{
    console.log("connected")
})



