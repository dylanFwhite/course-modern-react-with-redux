import axios from "axios"
import { useState, useEffect } from "react"
import BookCreate from './components/BookCreate'
import BookList from './components/BookList'

function App() {

    const [books, setBooks] = useState([])

    const fetchBooks = async () => {
        const response = await axios.get('http://127.0.0.1:3001/books')

        setBooks(response.data)
    }

    // DONT DO THIS - It will trigger an infinite re-render loop
    // fetchBooks()
    // Utilise useEffect() instead to control when code is run
    useEffect(() => {
        fetchBooks()
    }, [])


    const createBook = async (title) => {
        const response = await axios.post('http://127.0.0.1:3001/books', {
            title
        })

        // BAD CODE - DO NOT DO THE FOLLOWING
        // Cannot mutate an existing state object by reference because it will
        // not trigger a React re-render
        // Instead we need to create a new object in memory
        //
        // books.push({ id: 123, title: title })
        // setBooks(books)

        const updatedBooks = [
            ...books,
           response.data
        ] 

        setBooks(updatedBooks)
    }

    const deleteBookById = async (id) => {
        await axios.delete(`http://127.0.0.1:3001/books/${id}`)
        const updatedBooks = books.filter((book) => {
            return book.id !== id
        })

        setBooks(updatedBooks)
    }

    const editBookById = async (id, newTitle) => {
        const response = await axios.put(`http://127.0.0.1:3001/books/${id}`, {
            title: newTitle
        })
        const updatedBooks = books.map((book) => {
            if (book.id === id) {
                return {...book, ...response.data}
            }

            return book
        })

        setBooks(updatedBooks)
    }

    return (
        <div className="app">
            <h1>Reading List</h1>
            <BookList 
                books={books} 
                onDelete={deleteBookById} 
                onEdit={editBookById} 
            />
            <BookCreate onCreate={createBook} />
        </div>
    )
}

export default App