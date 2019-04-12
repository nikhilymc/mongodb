const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/librarymyapp');
const schema= mongoose.Schema;
var newbookschema = new schema({
    title:String,
    author:String,
    genre:String
});
var bookdata=mongoose.model('book-data',newbookschema);
module.exports=bookdata;
