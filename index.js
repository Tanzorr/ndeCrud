const express = require('express');
const mongoose = require('mongoose');
const Post = require('./Post')
const router = require('./router');
const fileUpload = require('express-fileupload');


const PORT = 5000;
const DB_URL =`mongodb+srv://user:user@cluster0.fbcyw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`

const app = express();

app.use(express.json());
app.use(express.static('static'));
app.use(fileUpload({}))
app.use('/api', router);

app.post('/', async (req, res)=>{
   try {
      const {author, title, content, picture} = req.body;
      const post = await Post.create({author, title, content, picture});
      res.status(200).json('Server working 1111' );
   }catch (e) {
      res.status(500).json(e)
   }
});

async function startApp(){
   try{
      await mongoose.connect(DB_URL)
      app.listen(PORT, ()=>console.log("SERVER STARTED ON PORT " + PORT))
   }catch (e) {
      console.log(e);
   }
}


startApp();