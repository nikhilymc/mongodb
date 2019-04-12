const express=require('express');
const chalk=require('chalk');
const path=require('path');

const authorsRouter=express.Router();
var app=express();

app.set('views','./src/views');
app.set('view engine','ejs');
app.use(express.static(path.join(__dirname,"/public")))

app.use('/authors',authorsRouter);
const nav=[
    {link:'/books',title:'books'},
    {link:'/authors',title:'Authors'},
    {link:'/addbook',title:'Admin'}
];
const booksRouter=require('./src/routes/bookRoutes')(nav);
const adminRouter=require('./src/routes/adminRoutes')(nav);
app.use('/books',booksRouter);
app.use('/addbook',adminRouter);
app.get('/',(req,res)=>{
    res.render("index",{
       nav,
             title:'library'
            }
            );
});




app.listen(3000,function(){

console.log('listening to port'+chalk.green('3000'));
});