const express=require('express');
const authorsRouter=express.Router();

authorsRouter.route('/').get((req,res)=>{
    res.render("authors",{
    nav,
    title:'authors'});
});
module.exports=authorsRouter;

