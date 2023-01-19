const mongoose=require('mongoose')

mongoose.set('strictQuery', false);

const connectDB=async()=>{

    const connection= mongoose.connect('mongodb+srv://Noor:Neokred123@cluster0.i35r67z.mongodb.net/?retryWrites=true&w=majority',
    {
        useNewUrlParser:true,
        dbName:"Neokred_Crud",
        user:"Noor",
        pass:"Neokred123",
        autoCreate:true,
    }
    ).then(res => {
    console.log("database connected succesfully")

    }).catch(err =>{
    console.log("database not connected succesfully")

    })





    

}
module.exports=connectDB