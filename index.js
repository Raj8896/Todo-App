const { log } = require('console');
const express = require('express');

const port = 8000;
const bodyParser = require('body-parser');
const db = require('./config/mongoose');

const Task = require('./modals/task');

const app = express();
// Parse incoming requests with JSON payloads
app.use(bodyParser.json());

// Parse incoming requests with URL-encoded payloads
app.use(bodyParser.urlencoded({ extended: false }));


app.use(express.static("./views"));

app.use(express.urlencoded());

app.set('view engine','ejs');
app.set('views','./views');

app.get('/',async function(req,res){
//     Task.find({},function(err,task){
//         if(err){
//             console.log('Error in fetching task from db');
//             return;
//         }

//         return res.render('home',{
//             title: "Home",
//             task: task
//         });
//    })
  const task = await Task.find();
   //console.log(task);
  return res.render('home',{
            title: "Home",
             task: task
         });
 });

app.post('/create-task',  function(req,res){
    // Task.create({
    //     description: req.body.description,
    //     category : req.body.category,
    //     date: req.body.date
    // }, function(err,newtask){
    //     if(err){
    //         console.log('error in creating task',err);
    //         return;
    //     }
    //     return res.redirect('back');
    // });
    const create =  Task.create({description: req.body.description,
            category: req.body.category,
             date: req.body.date
            });
              return res.redirect('back');

});


app.get('/delete-task', async function(req,res){

    var id = req.query;

    var count = Object.keys(id).length;
    for(let i=0;i<count;i++){

        const deleteTask = await Task.findByIdAndDelete(Object.keys(id)[i]);
    }
    return res.redirect('back');
});


app.listen(port,function(error){
    if(error){
        console.log(`Error on server: ${error}`);
    }
    console.log(`Server is up and running on port : ${port}`);
})
