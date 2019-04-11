const express=require('express');
const chalk=require('chalk');
const path=require('path');
const booksRouter=express.Router();

var app=express();
app.set('views','./src/views');
app.set('view engine','ejs');
app.use(express.static(path.join(__dirname,"/public")))
app.use('/books',booksRouter);

app.get('/',(req,res)=>{
    res.render("index",{
        nav:[
            {link:'/books',title:'books'},
            {link:'/authors',title:'Authors'}],
        title:'library'});
});
booksRouter.route('/').get((req,res)=>{
    res.send("hello books");
});

app.listen(3000,function(){

console.log('listening to port'+chalk.green('3000'));
});