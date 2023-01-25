const Express = require('express')
const cors = require('cors')
const bodyparser = require('body-parser')
const student = require('./modal')
const app = Express();
app.use(cors())
app.use(bodyparser.json())

var urlencodedParser = bodyparser.urlencoded({ extended: false })

/*mongoose connection*/

const mongoose = require('mongoose');
const students = require('./modal');


const url = 'mongodb+srv://chandra123:chandra123@cluster0.fnoyvit.mongodb.net/APRDC?retryWrites=true&w=majority';

mongoose.connect(url)
    .then( () => {
        console.log('Connected to database ')
    })
    .catch( (err) => {
        console.error(`Error connecting to the database. \n${err}`);
    })
/*This is for mongoose connection */



/* This is the code for form submitting */

app.post('/student',urlencodedParser,async(req,res)=>{
    const user = new student(req.body);
  
    try {
      await user.save();
      res.send(user);
    } catch (error) {
      res.status(500).send(error);
    }
    
})

/* This is the code for form submitting */

app.get('/details',urlencodedParser,async(req,res)=>{

    try {
      const studata= await students.find();
      res.status(200).json(studata);
    } catch (error) {
      res.status(500).send(error);
    }
    
})



app.listen(3001,()=>{
    console.log("server is running")
})