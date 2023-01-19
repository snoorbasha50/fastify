

const mongoose=require("mongoose")

mongoose.set('strictQuery', false);

const connectDB= async()=>{
    const connection=await mongoose.connect("mongodb+srv://mern-app-43:mern@cluster0.vlbqz.mongodb.net/?retryWrites=true&w=majority",
    {useNewUrlParser: true ,
        dbName: "blog",
    user: "mern-app-43",
    pass:"mern",
    autoCreate: true,})
     console.log("dbconnected successfully")
}

module.exports=connectDB
