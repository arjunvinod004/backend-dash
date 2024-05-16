const express= require('express')
const nodemon= require('nodemon')
const cors=require('cors')
const app= express()
const bodyParser= require('body-parser')
const collection=require('./mongoose')
const port = process.env.PORT || 8000
// const collections=require('./users')
const multer= require('multer')
const path= require('path')
app.use(express.json())
app.use(cors())

app.use(bodyParser.json({ limit: '500mb' }));
app.use(bodyParser.urlencoded({ limit: '500mb', extended: true }));

// app.use(express.urlencoded({ extended: false }));

// app.use(express.urlencoded({ extended: true }));

app.get('/',(req,res)=>{
    res.send('<h1> hi node</h1>')
    res.send('hello')
})

const storage= multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'public/images')
    },
    filename:(req,file,cb)=>{
        cb(null, file.fieldname + "-" + Date.now() + path.extname(file.originalname))
    }
});



const upload= multer({
    storage:storage
})

// app.post('/upload',upload.single('file'),(req,res)=>{
//     collection.create({image:req.file.filename})
//     .then(result=>res.json(result))
//     .catch(err=>console.log(err))
//     console.log(req.file);
// })

// add users to database(mongodb)
app.post('/users',(req,res) => {
    const {base64}=req.body
    console.log(req.body);
    collection.create(req.body,{selectimg:base64})
    // collection.create(req.file.destination)
    
        .then(user => {res.json(user)
         res.send('File received');
        })
        .catch(err => res.json(err));
});




// app.post('/users', upload, async (req, res) => {
//     try {
//         const { name, email, age } = req.body;
//         const image = req.file;

//         // Create new user document
//         const newUser = new collection({
//             name,
//             email,
//             age,
//             image
//         });

//         // Save user to MongoDB
//         await newUser.save();

//         res.status(201).send('User added successfully');
//     } catch (error) {
//         console.error(error);
//         res.status(500).send('Internal Server Error');
//     }
// });



// get users from database to mainpage
app.get('/getusers',(req,res)=>{
    collection.find({})
    .then(users=>res.json(users))
    .catch(err=>res.json(err))
})
//get edit by users by id 
app.get('/getusersid/:id',(req,res)=>{
    const id=req.params.id;
    collection.findById({_id:id})
    .then(users=>res.json(users))
    .catch(err=>res.json(err))
})
// get update by user
app.put('/updateusers/:id',(req,res)=>{
    const id=req.params.id
    collection.findByIdAndUpdate({_id:id},
        {name:req.body.name,
        email:req.body.email,
        age:req.body.age,
        selectimg:req.body.selectimg
        }
    )
    .then(users=>res.json(users))
    .catch(err=>res.json(err))
})

//delete by user

app.delete('/deleteusers/:id',(req,res)=>{
    const id=req.params.id
    collection.findByIdAndDelete({_id:id}
    )
    .then(users=>res.json(users))
    .catch(err=>res.json(err))
})

app.listen(8000,()=>{
console.log(`connected to ${port} `);
})
