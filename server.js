const express = require('express');
const port = 3000;
const booksRouter = require('./routes/books');
const countryiesRouter = require('./routes/countries');
const app = express();


app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    //res.send('<h1>Hello from app get /<h1/>');
    //res.sendStatus(500);
    //res.status(500).json({message: "Internal error. Try again later"});
    //res.download('server.js');

    res.render('index');
    
});

app.use('/books', booksRouter);
app.use('/countries', countryiesRouter);


// app.get('/books/:bookid', (req, res)=> {
//     const book = data.books.filter(bookInData =>{
//         if(bookInData.id === req.params.bookid){
//             return bookInData;
//         }
//     })
// });

// app.get('/books/:bookId', (req, res) => {
//     const requestedBookId = req.params.bookId;
//     const book = data.books.filter(bookInData =>{
//         if(bookInData.id.toString() === requestedBookId){
//             return bookInData;
//         }
//     });

//     res.status(200).json(book);
// });

app.listen (port, () => {
    console.log(`Server is running on port ${port}.`)
});


