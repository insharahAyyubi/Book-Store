import mongoose from "mongoose";

const bookSchema = mongoose.Schema({
    id:Number,
    title:String,
    description:String,
    price:Number,
    category:Array,
    img:String,
    isFree:Boolean,
})

const book_model = mongoose.model("book_model", bookSchema);

export default book_model;