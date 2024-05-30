const mongoose= require('mongoose');
require('dotenv').config();
console.log(process.env.MONGODB_URL);
// const mongodb_url = process.env.MONGODB_URL;
const mongodb_url = "mongodb+srv://arjunvt67:arjun67vt@cluster0.9e71qs9.mongodb.net/databaseName?retryWrites=true&w=majority"
mongoose.connect(mongodb_url)
.then(()=>{
    console.log(`mongodb connected ${mongodb_url}`);
    })
    .catch(()=>{
    console.log('not connected');
    })




    const userSchema= new mongoose.Schema({
        name:{type:String,
            required:true
        },
        email:{type:String,
            required:true
        },
        age:{
            type:Number,
            required:true
        },
       selectimg:{
        type:String,
        required:true
       }
   
        
    })

    const collection=  mongoose.model('dashs',userSchema)
    module.exports=collection
