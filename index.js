const express = require('express')
const app = express();
const ejs = require('ejs');
const path = require('path');
const ejsMate = require('ejs-mate')
const PORT = 3000 || process.env.PORT;
const mongoose = require('mongoose');
const User = require('./models/user')

mongoose.connect('mongodb://localhost:27017/artAuth', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});


const db = mongoose.connection;
db.on("error", console.error.bind(console, 'connection error:'));
db.once("open", ()=>{
    console.log("Database connected")
})


app.use(express.static('public'));
app.use(express.urlencoded({extended: true}))
app.set('views', path.join(__dirname, 'views'));
app.engine('ejs', ejsMate)
app.set('view engine', 'ejs');



app.get('/', (req, res)=>{
    res.render('home')
})

app.get('/signup', (req, res)=>{
    res.render('signup')
})

app.get('/login', (req, res)=>{
    res.render('login')
})
app.get('/oops', (req, res)=>{
    res.render('oops')
})
app.get('/secret', (req, res)=>{
    res.render('secret')
})

app.post('/signup', async(req, res)=>{
    try{const {username, password} = req.body
  
    const user = new User({username, password})
     user.save()
     console.log(user)
     res.redirect('/secret')
    } 
    catch(err){
        console.log(err)
    }
})

app.post('/login', async(req, res)=>{
    try{
    const data = await req.body
    const user = await User.findOne({ username: data.username})

        if (user){
    if (user.password == data.password){
        
    res.redirect('/secret') } else {res.redirect('/oops')}

} else {res.redirect('/oops')} 
    }
    catch(err){
        console.log(err)
    }


})
app.listen(PORT, ()=>{
    console.log('SERVER IS RUNNING')
})
