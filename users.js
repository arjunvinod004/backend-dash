const mongoose= require('mongoose')
mongoose.connect('mongodb://localhost:27017/dashboard')
.then(()=>{
    console.log('mongodb connected');
    })
    .catch(()=>{
    console.log('not connected');
    })

    const userSchemas= new mongoose.Schema({
       
      image:{
        type:String,
      },
      name:{type:String,
        
    },
    email:{type:String,
        
    },
    age:{
        type:Number,
        
    },
    })

    const collections=  mongoose.model('users',userSchemas)
    module.exports=collections
