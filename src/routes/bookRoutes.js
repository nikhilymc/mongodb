const express=require('express');
const booksRouter=express.Router();
const mongoose=require('mongoose');
const bookdata=require('../model/bookdata')
function router(nav){

booksRouter.route('/').get((req,res)=>{
    bookdata.find()
    .then(function(books){
    res.render("books",{
    nav,
         title:'books',
         books
    });

});
        


});
booksRouter.route('/:id').get((req,res)=>{
    const id=req.params.id;
    bookdata.findOne({_id:id})
     
    .then(function(book){
        res.render("book",{
        nav,
             title:'book',
             book
        });
    
    });
            
    
    
    }); 
    
   
return booksRouter;
}
module.exports=router;