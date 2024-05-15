const mongoose= require('mongoose')
mongoose.connect('mongodb://localhost:27017/dashboard')
.then(()=>{
    console.log('mongodb connected');
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
