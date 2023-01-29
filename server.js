const Express = require('express')
const cors = require('cors')
const bodyparser = require('body-parser')
const app = Express();
app.use(cors())
app.use(bodyparser.json({limit: '50mb'}))
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
   

    const user = new students(req.body);
    
    try {
      await user.save();
      res.send(user);
    } catch (error) {
      res.status(500).send(error);
    }
      
})

/* This is the code for form submitting */

app.get('/details/:search',urlencodedParser,async(req,res)=>{

     const hallnumber = req.params.search
     
    try {
      
      const studata= await students.find({hallnumber:hallnumber});
      res.status(200).json(studata);
    } catch (error) {
      res.status(500).send(error);
    }
    
})



app.listen(3001,()=>{
    console.log("server is running")
})