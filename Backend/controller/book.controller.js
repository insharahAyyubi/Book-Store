import book_model from "../model/book.model.js"

export const getBook = async(req, res) => {
    try {
        // book is an array of objects containing books
        const book = await book_model.find()
        res.status(200).json(book)
    } catch (error) {
        console.log("Error: ", error)
        res.status(500).json(error)
    }
};