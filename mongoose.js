const mongoose= require('mongoose')
const mongodb_url = process.env.PORT || 'mongodb+srv://arjunvt67:arjun67vt@cluster0.9e71qs9.mongodb.net/'
mongoose.connect(process.env.PORT ||mongodb_url)
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
